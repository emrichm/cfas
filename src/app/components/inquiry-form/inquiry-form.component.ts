import { Inquiry } from 'src/app/models/inquiry';
import { ClassHoursService } from 'src/app/services/class-hours.service';
import { MailerService } from 'src/app/services/mailer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cfas-contact-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent implements OnInit {
  @Output() sentMail = new EventEmitter<boolean>();
  private _inquiry: Inquiry = new Inquiry();
  inquiryForm = this.fb.group({
    firstName: ['Mark', Validators.required],
    lastName: ['Emrich', Validators.required],
    email: ['m.emrich@gmx.de', [Validators.required, Validators.email]],
    subject: ['Anderes', Validators.required],
    wishDate: [null],
    hour: [null],
    message: ['Test'],
    agreement: [true, Validators.requiredTrue]
  });
  subjects = ['Drop-In', 'Probetraining', 'Anderes']
  fromDate: Date;
  toDate: Date;
  hours: string[] = [];
  messageBox = {
    placeholder: 'Zusätzliche Nachricht',
    required: false
  }

  constructor(
    private fb: FormBuilder,
    private classHoursService: ClassHoursService,
    private mailerService: MailerService
  ) { }

  ngOnInit(): void {
    this.setFromToDates();
  }

  onSubmit(): void {
    this.mailerService.sendInquiry(this.inquiry).subscribe(
      () => {
        this.sentMail.emit(true);
        this.inquiryForm.disable();
      },
      (error) => {
        console.error(error);
        this.sentMail.emit(false);
      }
    );
  }

  setHours(): void {
    const dayOfWeek = this.inquiry.wishDate.getDay();
    this.hours = this.classHoursService.getClassHoursForDayOfWeek(dayOfWeek);
  }

  get inquiry(): Inquiry {
    this._inquiry.firstName = this.inquiryForm.controls['firstName'].value;
    this._inquiry.lastName = this.inquiryForm.controls['lastName'].value;
    this._inquiry.email = this.inquiryForm.controls['email'].value;
    this._inquiry.subject = this.inquiryForm.controls['subject'].value;

    if (this.inquiryForm.controls['wishDate'].value)
      this._inquiry.wishDate = this.inquiryForm.controls['wishDate'].value.toDate();

    if (this.inquiryForm.controls['hour'].value)
      this._inquiry.hour = this.inquiryForm.controls['hour'].value;

    this._inquiry.message = this.inquiryForm.controls['message'].value;
    return this._inquiry;
  }

  private setFromToDates(): void {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    this.fromDate = new Date(year, month, day + 1);
    this.toDate = new Date(year, month, day + 10);
  }
}
