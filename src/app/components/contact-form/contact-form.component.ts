
import { ClassHoursService } from 'src/app/services/class-hours.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cfas-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['Mark', Validators.required],
    lastName: ['Emrich', Validators.required],
    email: ['mark.emrich@gmx.de', [Validators.required, Validators.email]],
    subject: ['Probetraining', Validators.required],
    wishDate: [null],
    hour: [null],
    message: [null],
    agreement: [false, Validators.requiredTrue]
  });

  fromDate: Date;
  toDate: Date;

  subjects = [
    'Drop-In',
    'Probetraining',
    'Anderes'
  ]

  hours = [];

  messageBox = {
    placeholder: 'Zusätzliche Nachricht',
    required: false
  }

  constructor(
    private fb: FormBuilder,
    private classHoursService: ClassHoursService
  ) { }

  ngOnInit() {
    this.setFromToDates();
  }

  onSubmit() {
    alert('Thanks!');
  }

  setHours() {
    const dayOfWeek = this.contactForm.controls['wishDate'].value.toDate().getDay();
    this.hours = this.classHoursService.getClassHoursForDayOfWeek(dayOfWeek);
  }

  private setFromToDates() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    this.fromDate = new Date(year, month, day + 1);
    this.toDate = new Date(year, month, day + 10);
  }
}
