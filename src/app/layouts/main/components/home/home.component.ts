import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import {
  Blog,
  FocusAreas,
  IifAbout,
  Partner,
  Slider,
  Volunteer,
} from "src/app/interfaces/app";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title: string = "Home";
  homeData: any;

  isSubmitting: boolean = false;
  dataLoading: boolean = false;
  sliderLoaded: boolean = false;

  // slider
  bgImage = 'url("../../../assets/images/sliders/s1.png")';
  slideTitle = "Nigerian National Advisory Board";
  slideSubtitle = "Impact Investors Foundation";
  desc = "Building a dynamic ecosystem for impact investment in Nigeria";
  slideUrl = "/about-us";
  dataRefresher: any;
  counter: number = 0;

  currentHighlight = 0;

  ceoName = "Secretariat";

  welcomeMessageImage = "../../../assets/images/meeting.jpg";

  highlights = [
    {
      id: 1,
      title: "National Advisory Board",
      url: "/about-us/nab-secretariat",
      content:
        "The Secretariat support is provided by the 'Impact Investors Foundation'",
    },
    {
      id: 2,
      title: "The Pillars",
      url: "/strategic-pillars",
      content:
        "The four strategic pillars reflect the recommendations made by the NAB Taskforce to address the main challenges in the impact investing industry highlighted in the IIF 2019 landscape study and echoed by members of the community during the robust consultative process in June and September 2020.",
    },
    {
      id: 3,
      title: "NAB Governance Structure",
      url: "/our-service/venture-capital",
      content:
        "The National Advisory Board provides oversight to the entire structure including the 4 strategic pillars - The Supply of Capital, Demand for capital, Policy and Intermediaries. The Impact Investors' Foundation (IIF) provides support to the NAB and serves as the Secretariat.",
    },
  ];

  fetching = true;
  aboutUs: IifAbout = {};
  focusAreas: FocusAreas[] = [];
  blogs: Blog[] = [];
  sliders: Slider[] = [];
  partners: Partner[] = [];
  ctaBg = "../../../../../assets/images/cta-bg.jpg";
  ctaIntro = "Would you like to hear from us? ";
  ctaMessage =
    "Kindly provide your name and phone number in the form below, and we would reach out to you in shortest time possible.";

  id = "Nu3XMQod9HhJVyejTLl9";

  constructor(
    private titleService: Title,
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.refreshData();
    this.fetchData();
  }

  setHighlight(id: any) {
    this.currentHighlight = id;
  }

  // Fetch bg every 3 seconds
  refreshData() {
    this.dataRefresher = setInterval(() => {
      // loop through images
      this.sliders.forEach((slide: Slider) => {
        // compare id's and assign image to bg image
        if (this.counter === slide.id - 1) {
          this.bgImage = "url(" + slide.imageUrl + ")";
          this.slideTitle = slide.title;
          this.desc = slide.description;
          this.slideUrl = slide.url;
        }
      });

      this.counter++;

      if (this.counter > 3) {
        this.counter = 0;
      }
    }, 15000);
  }

  nextSlide(i: any) {
    this.counter = i;

    // loop through images
    this.sliders.forEach((i: any) => {
      // compare id's and assign image to bg image
      if (this.counter === i.id) {
        this.bgImage = "url(" + i.imageUrl + ")";
        this.slideTitle = i.title;
        this.slideSubtitle = i.subtitle;
        this.slideSubtitle = i.subtitle;
        this.desc = i.description;
        this.slideUrl = i.url;
      }

      this.counter++;
    });
  }

  async fetchData() {
    this.fetchSliders();
    this.fetchPartners();
    this.fetchAboutUs();
    this.fetchNews();
    this.fetching = false;
  }

  async fetchAboutUs() {
    this.appService.getAboutUs(this.id).subscribe((res: IifAbout) => {
      this.aboutUs = res;
    });
  }

  async fetchPartners() {
    this.appService.getPartners().subscribe((res: Partner[]) => {
      this.partners = res;
    });
  }

  async fetchNews() {
    this.appService.getBlogs().subscribe((res: any) => {
      this.blogs = res;
    });
  }

  async fetchSliders() {
    this.appService.getSliders().subscribe((res: Slider[]) => {
      this.sliders = res;
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
