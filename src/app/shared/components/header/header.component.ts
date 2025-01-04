import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { IifAbout, Volunteer } from "src/app/interfaces/app";
import { SocialMedia } from "src/app/interfaces/social-media";
import { TopBar } from "src/app/interfaces/top-bar";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  logo = "../../../../assets/images/logo.png";

  address: any;
  emailAddress: any;
  emailIcon: any;
  phoneNumber: any;
  phoneIcon: any;
  phoneUrl: any;

  fetching: boolean = false;
  socialData: SocialMedia[] = [];
  contactInformation: TopBar = {};

  menus = [
    {
      title: "Home",
      url: "/",
      hasKids: false,
      children: [],
    },
    {
      title: "About Us",
      url: "/about-us",
      hasKids: true,
      children: [
        {
          title: "About IIF",
          url: "/about-us",
        },
        {
          title: "Impact Investing",
          url: "/about-us/impact-investing",
        },
        {
          title: "NAB Secretariat",
          url: "/about-us/secretariat",
        },
        {
          title: "Governance",
          url: "/about-us/governance",
        },
      ],
    },
    {
      title: "Strategic Pillars",
      url: "/strategic-pillars",
      hasKids: false,
      children: [
        // {
        //   title: 'Increase In Demand',
        //   url: '/strategic-pillars/1-reqSlug-increase-demand',
        // },
        // {
        //   title: 'Increase In Demand & Supply',
        //   url: '/strategic-pillars/2-reqSlug-increase-demand-supply',
        // },
        // {
        //   title: 'Promote Policy',
        //   url: '/strategic-pillars/3-reqSlug-promote-policy',
        // },
        // {
        //   title: 'Promote Intermediaries',
        //   url: '/strategic-pillars/4-reqSlug-promote-intermediaries',
        // },
      ],
    },
    {
      title: "News & Publications",
      url: "/media/news",
      hasKids: false,
      children: [],
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      hasKids: false,
      children: [],
    },
  ];

  aboutUs: IifAbout = {};
  isSubmitting = false;
  id = "Nu3XMQod9HhJVyejTLl9";

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.fetchAboutUs();
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

  // Split date
  splitDate(data: any) {
    var splitted = data.split("T");
    var date = splitted[0];
    return date;
  }

  form = this.formBuilder.group({
    fullName: ["", { validators: [Validators.required], updateOn: "change" }],
    phoneNumber: [
      "",
      { validators: [Validators.required], updateOn: "change" },
    ],
  });

  async onCtaSubmit() {
    this.isSubmitting = true;

    let fullName = this.form.value.fullName;
    let phoneNumber = this.form.value.phoneNumber;
    let sId = Date.now().toString();

    this.form.disable;

    const payload: Volunteer = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      id: sId,
    };

    this.appService.joinUs(sId, payload);

    this.form.reset();

    this.isSubmitting = false;
  }
}
