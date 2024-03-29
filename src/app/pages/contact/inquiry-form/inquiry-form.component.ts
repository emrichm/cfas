import { filter } from 'rxjs/operators';
import { Inquiry } from 'src/app/models/inquiry';
import { ClassHoursService } from 'src/app/shared/services/class-hours.service';
import { MailerService } from 'src/app/shared/utils/mailer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

enum Subjects {
  'drop-in' = 'Drop-In',
  'trail' = 'Probetraining',
  'pt' = 'Personal Training',
  'massage' = 'Sportbehandlung und Schmerzcoaching',
  'hall' = 'Hallenmiete',
  'other' = 'Anderes'
}

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
  subjects = [Subjects['drop-in'], Subjects.trail, Subjects.pt, Subjects.massage, Subjects.hall, Subjects.other];
  withDateTimePicker = [Subjects['drop-in'], Subjects.trail];
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
    this.route.queryParams.pipe(filter(params => params.subject))
      .subscribe(subject => {
        this.inquiryForm.controls.subject.setValue(Subjects[subject.subject]);
      });
  }

  onSubmit(): void {
    this.mailerService.sendInquiry(this._inquiry).subscribe(
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

  hasDateTimePicker = (subject: string): boolean => {
    return this.withDateTimePicker.includes(subject as Subjects);
  }

  dateFilter = (date: Date) => {
    const dayOfWeek = new Date(date).getDay();
    return this.classHoursService.getClassHoursForDayOfWeek(dayOfWeek).length;
  };

  get inquiry(): Inquiry {
    this._inquiry.firstName = this.inquiryForm.controls.firstName.value;
    this._inquiry.lastName = this.inquiryForm.controls.lastName.value;
    this._inquiry.email = this.inquiryForm.controls.email.value;
    this._inquiry.subject = this.inquiryForm.controls.subject.value;

    if (this.inquiryForm.controls.wishDate.value) {
      this._inquiry.wishDate = this.inquiryForm.controls.wishDate.value.toDate();
    }

    if (this.inquiryForm.controls.hour.value) {
      this._inquiry.hour = this.inquiryForm.controls.hour.value;
    }

    this._inquiry.message = this.inquiryForm.controls.message.value;
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
