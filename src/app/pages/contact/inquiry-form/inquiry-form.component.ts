import { filter } from 'rxjs/operators';
import { Inquiry } from 'src/app/models/inquiry';
import { ClassHoursService } from 'src/app/shared/services/class-hours.service';
import { MailerService } from 'src/app/shared/utils/mailer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cfas-contact-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent implements OnInit {
  @Output() sentMail = new EventEmitter<boolean>();
  private _inquiry: Inquiry = new Inquiry();
  inquiryForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    wishDate: [null],
    hour: [null],
    message: [''],
    agreement: [false, Validators.requiredTrue]
  });
  subjects = ['Drop-In', 'Probetraining', 'Anderes'];
  fromDate: Date;
  toDate: Date;
  hours: string[] = [];
  messageBox = {
    placeholder: 'Zusätzliche Nachricht',
    required: false
  };

  constructor(
    private fb: FormBuilder,
    private classHoursService: ClassHoursService,
    private mailerService: MailerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setFromToDates();
    this.route.queryParams.pipe(filter(params => params.trail))
      .subscribe(trail => {
        if (trail) {
          this.inquiryForm.controls.subject.setValue('Probetraining');
        }
      });
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
    this.inquiry.firstName = this.inquiryForm.controls.firstName.value;
    this.inquiry.lastName = this.inquiryForm.controls.lastName.value;
    this.inquiry.email = this.inquiryForm.controls.email.value;
    this.inquiry.subject = this.inquiryForm.controls.subject.value;

    if (this.inquiryForm.controls.wishDate.value) {
      this.inquiry.wishDate = this.inquiryForm.controls.wishDate.value.toDate();
    }

    if (this.inquiryForm.controls.hour.value) {
      this.inquiry.hour = this.inquiryForm.controls.hour.value;
    }

    this.inquiry.message = this.inquiryForm.controls.message.value;
    return this.inquiry;
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
