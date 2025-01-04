import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { IifAbout, IifContactUs, SocialMedia } from "src/app/interfaces/app";
import { TopBar } from "src/app/interfaces/top-bar";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  bgImage = 'url("../../../assets/images/building.jpg")';
  title: string = "Contact Us";
  isLoading: boolean = false;

  logo =
    "https://images.pexels.com/photos/2422287/pexels-photo-2422287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  emailAddress: any;
  emailIcon: any;
  phoneNumber: any;
  phoneIcon: any;
  phoneUrl: any;
  officeAddress: any;

  fetching: boolean = false;
  contactInformation: TopBar = {};
  messages: IifContactUs[] = [];
  socialData: SocialMedia[] = [];
  aboutUs: IifAbout = {};

  isSubmitting: boolean = false;
  currentYear = new Date().getFullYear();

  intro = "We'd Like to hear from you";
  heading = "Get In Touch";
  msg =
    "Looking to do business with us? Fill and submit the following form and we will engage you as soon as possible.";

  showAlert = false;
  msgg = "";
  msgTitle = "";
  isSuccess = false;
  id: string = "Nu3XMQod9HhJVyejTLl9";
  address: any;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private titleService: Title
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.fetchAboutUs();
    this.fetchSocialMedias();
    this.fetchMessages();
    this.fetching = false;
  }

  async fetchAboutUs() {
    this.appService.getAboutUs(this.id).subscribe((res: IifAbout) => {
      this.address = res.address;
      this.phoneNumber = res.phoneNumber;
      this.emailAddress = res.email;
    });
  }

  async fetchSocialMedias() {
    this.appService.getAllSocialMedias().subscribe((res: SocialMedia[]) => {
      this.socialData = res;
    });
  }

  async fetchMessages() {
    this.appService.getAllMessages().subscribe((res: IifContactUs[]) => {
      this.messages = res;
    });
  }

  form = this.formBuilder.group({
    first_name: ["", { validators: [Validators.required], updateOn: "change" }],
    last_name: ["", { validators: [Validators.required], updateOn: "change" }],
    phone_number: [
      "",
      { validators: [Validators.required], updateOn: "change" },
    ],
    subject: ["", { validators: [Validators.required], updateOn: "change" }],
    content: ["", { validators: [Validators.required], updateOn: "change" }],
    email: [
      "",
      {
        validators: [Validators.required, Validators.maxLength(100)],
        updateOn: "change",
      },
    ],
  });

  async onCreate() {
    this.isSubmitting = true;

    let firstName = this.form.value.first_name;
    let lastName = this.form.value.last_name;
    let phoneNumber = this.form.value.phone_number;
    let email = this.form.value.email;
    let subject = this.form.value.subject;
    let content = this.form.value.content;
    let id = this.messages.length + 1;
    let sId = id.toString();

    if (this.form.invalid) {
      return;
    } else {
      this.form.disable;

      this.appService.createMessage(
        sId,
        firstName,
        lastName,
        email,
        phoneNumber,
        subject,
        content
      );

      this.form.reset();

      this.isSubmitting = false;
    }
  }
}
