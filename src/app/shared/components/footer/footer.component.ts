import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { IifAbout, Partner, Volunteer } from "src/app/interfaces/app";
import { SocialMedia } from "src/app/interfaces/social-media";
import { TopBar } from "src/app/interfaces/top-bar";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  logo = "../../../../assets/images/logo.png";
  intro =
    "The Nigeria National Advisory Board for Impact Investing has a three tiered structure - comprising a 15-member board, a second tier consisting of four working groups: The supply of capital, demand for capital, Intermediaries and policy working groups and the NAB Secretariat, the Impact Investors' Foundation.";

  emailAddress: any;
  emailIcon: any;
  phoneNumber: any;
  phoneIcon: any;
  phoneUrl: any;
  officeAddress: any;

  fetching: boolean = false;
  aboutUs: IifAbout = {};
  socialData: SocialMedia[] = [];
  subscribers: SocialMedia[] = [];
  contactInformation: TopBar = {};

  menu = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Who We Are",
      url: "/about-us",
    },
    {
      title: "Impact Investing",
      url: "/about-us/impact-investing",
    },
    {
      title: "NAB Secretariat",
      url: "/about-us/nab-secretariat",
    },
    {
      title: "Governance",
      url: "/about-us/governance",
    },
    {
      title: "News & Publications",
      url: "/news-publications",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  isSubmitting: boolean = false;
  currentYear = new Date().getFullYear();

  showAlert = false;
  msg = "";
  msgTitle = "";
  isSuccess = false;

  id = "Nu3XMQod9HhJVyejTLl9";
  address = "";

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.fetchAboutUs();
    this.fetchSubscribers();
    this.fetchSocialMedias();
    this.fetching = false;
  }

  async fetchAboutUs() {
    this.appService.getAboutUs(this.id).subscribe((res: IifAbout) => {
      this.aboutUs = res;
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

  async fetchSubscribers() {
    this.appService.getAllNewsletter().subscribe((res: any[]) => {
      this.subscribers = res;
    });
  }

  // Split date
  splitDate(data: any) {
    var splitted = data.split("T");
    var date = splitted[0];
    return date;
  }

  form = this.formBuilder.group({
    name: ["", { validators: [Validators.required], updateOn: "change" }],
    email: ["", { validators: [Validators.required], updateOn: "change" }],
  });

  async onCtaSubmit() {
    this.isSubmitting = true;

    let name = this.form.value.name;
    let email = this.form.value.email;
    let sId = Date.now().toString();

    this.form.disable;

    const payload: Volunteer = {
      name: name,
      email: email,
      id: sId,
    };

    this.appService.newsletter(sId, payload);

    this.form.reset();

    this.isSubmitting = false;
  }
}
