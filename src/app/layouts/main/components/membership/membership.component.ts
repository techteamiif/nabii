import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import axios from "axios";
import { SocialMedia } from "src/app/interfaces/app";
import { AppService } from "src/app/services/app.service";
import { CountryService } from "src/app/services/country.service";

@Component({
	selector: "app-membership",
	templateUrl: "./membership.component.html",
	styleUrls: ["./membership.component.scss"],
})
export class MembershipComponent implements OnInit {
	bgImage = 'url("../../../assets/images/building.jpg")';
	title: string = "Membership";
	isLoading: boolean = false;
	fetching: boolean = false;
	showCategory: boolean = false;
	chosenCategory = "Category of Membership:";
	showIndustry: boolean = false;
	chosenIndustry = "Please, choose your Industry:";
	showOrganization: boolean = false;
	chosenOrganization = "Type of Organization:";
	showAreaOfInterest: boolean = false;
	chosenAreaOfInterest = "Specify Area of Interest:";
	showExclusiveContent: boolean = false;
	chosenExclusiveContent =
		"What exclusive content would be beneficial to your professional development?:";
	showPrivateDiscussionPlatforms: boolean = false;
	chosenPrivateDiscussionPlatforms =
		"On what private discussion platforms would you prefer to connect and engage with other NAB members?:";
	showMedium: boolean = false;
	chosenMedium = "How Did You Hear About Us?:";

	isSubmitting: boolean = false;
	currentYear = new Date().getFullYear();

	intro = "";
	heading = "Join NABII: Shape the Impact Investment Future of Nigeria";
	msg = "";
	items = [
		"Unemployment and underemployment",
		"Insecurity",
		"Food shortages",
		"Poverty and gender inequality",
		"Limited access to basic services such as proper healthcare, quality education, affordable housing, and financial services",
		"Clean water, hygiene and sanitation, and",
		"Climate change and adaptation",
	];

	paymentIntro = "Payment";
	paymentHeading = "Information";
	paymentMsg =
		"To join the NABII, kindly make payment using the details below:";
	bankName = "Zenith Bank PLC";
	accountName = "Impact Investors Foundation - NABII";
	accountNumber = "1226575909";
	emailAddress = "info@impactinvestorsfoundation.org";

	brochure = "https://docsend.com/view/8k8e837feu65xqwt";
	// brochure =
	//   "https://firebasestorage.googleapis.com/v0/b/website-23a47.appspot.com/o/brochures%2FFinal%20Draft%20NABII%20membership%20design%20(2)%20(1).pdf?alt=media&token=d9eba37c-5fcb-4bb2-b8a8-c54b364da869";

	showAlert = false;
	msgg = "";
	msgTitle = "";
	isSuccess = false;
	id: string = "Nu3XMQod9HhJVyejTLl9";
	// address: any;
	memberships: any[] = [];

	membershipCategories = [
		"CORPORATE / INSTITUTIONAL: ",
		"Category A - (Pension fund managers, wealth managers, Financial services firms, VC/PE firms  and Oil companies with >$100m AUM Family offices, and foundations) - N1 Million",
		"Category B - (International donor agencies, service providers (legal, accounting, consulting), wealth managers and VC/PE firms with <$100m AUM) - N500,00",
		"Category C  -  Media and educational institutions - N250,000",

		"Small Enterprise - (Micro, small and medium enterprises (MSMEs), Impact enterprises, Social innovators, Angel Investors, and NGOs providing solutions in the healthcare; education and agricultural sectors with gender and climate/sustainability considerations.) - N125,000",

		"Sponsor (for project sponsorship/donations)",
		"Observer (For Government/Government Agencies Only)",
	];

	// membershipCategories = [
	//   "Pension fund managers - FEE:  N1,000,000",
	//   "wealth managers - FEE:  N1,000,000",
	//   "Financial services firms - FEE:  N1,000,000",
	//   "VC/PE firms  and Oil companies with >$100m AUM Family offices - FEE:  N1,000,000",
	//   "Foundations - FEE:  N1,000,000",
	//   "International donor agencies - FEE:  N500,000",
	//   "Service providers (legal, accounting, consulting) - FEE:  N500,000",
	//   "Wealth managers and VC/PE firms with <$100m AUM - FEE:  N500,000",
	//   "Media and educational institutions - FEE:  N250,000",
	//   "Micro, small and medium enterprises (MSMEs) - FEE:  N125,000",
	//   "Impact enterprises - FEE:  N125,000",
	//   "Social innovators - FEE:  N125,000",
	//   "Angel Investors - FEE:  N125,000",
	//   "NGOs providing solutions in the healthcare; education and agricultural sectors with gender and climate/sustainability considerations - FEE:  N125,000",
	//   "Project sponsorship/donations",
	//   "Government/Government Agencies Observer",
	// ];

	industries = [
		"Healthcare ",
		"Education",
		"Agriculture",
		"Renewable Energy ",
		"Manufacturing",
		"Transport/Mobility",
		"Real Estate/Construction ",
		"Consumer Goods",
		"Industrial Goods ",
		"Media ",
		"Natural Resources",
		"Oil And Gas   ",
		"Information And Communications Technology ICT ",
		"Services",
		"Utilities ",
		"Aviation",
		"Hospitality",
		"Government",
		"Other, Please specify",
	];

	organizationTypes = [
		"Asset Owner",
		"Family Office/Trust",
		"Pension Fund Manager",
		"Insurance Company",
		"Limited Partner",
		"Asset/Wealth Manager",
		"Impact Fund",
		"Asset/Wealth Manager",
		"Fund Manager",
		"Private Equity",
		"Venture Capitalist",
		"Angel Investor",
		"MSME/Social Enterprise",
		"NGO",
		"Large Corporate",
		"Bank and other Financial Institutions",
		"Educational Institution",
		"Development Finance Institutions (DFI)",
		"Bilateral/Multilateral Agency",
		"Government/Government Agency",
		"Philanthropy/Foundation",
		"Consulting/Professional Services",
		"Accelerator/Hub",
		"Other",
	];

	interests = [
		"Investment-readiness support and accreditation",
		"Innovative Financial Instrument Design",
		"Impact Measurement and Management",
		"Climate and Sustainability",
		"Unlocking Pensions Fund for Impact Investing",
		"Policy Framework Development/Advocacy",
		"Intermediary Effectiveness",
		"Gender ",
		"Knowledge Management/Capacity Building/Market Research",
		"Strategic Support - NAB strategy implementation",
		"Strategic Support -  Monitoring and Evaluation",
		"Strategic Support - Governance implementation",
		"Strategic Support - Fundraising",
	];

	medium = [
		"Facebook",
		"Twitter",
		"Instagram",
		"LinkedIn",
		"Yahoo Search",
		"Google Search",
		"Email",
		"Newspaper",
		"Advertisement",
	];

	privateDiscussionPlatforms = [
		"Closed LinkedIn group",
		"Closed Online Community",
		"Both",
	];

	exclusiveContents = [
		"E-courses",
		"Unlimited access to replays of webinars and events",
		"Members only newsletters",
		"Membership of the Nigeria impact investing community",
		"Access to industry reports",
		"Others",

		"Expand corporate network and increase relevance in the  local and global impact investing ecosystem under the Global Steering Group for Impact Investing (GSG)  across 35 countries  and regions.",
		"Access to market reports and data insights",
		"Opportunity to provide professional services to members of the Nigerian National Advisory Board for impact investing and members",
		"Meet sustainability reporting requirements based on  statutory and/or stakeholders’ mandates",
		"Speaking engagements opportunities at NABII and GSG related events",
		"Discounts on conferences, networking events, training, capacity building programmes and sustainability reporting",
		"Feature in research (Case studies etc.)",
		"Access to local and international  LPs  and asset owners  (networking events provide access to LPs, DFIs, Family Offices & Foundations)",
		"Possibility of managing the  Wholesale Impact Investment  Fund (Prospective fund managers  must  go through a competitive screening &  selection process)",
		"Discount in  Impact Measurement and Management (IMM) training",
		"Brand association and increased visibility through mentions on the NAB website",
	];

	agreement = false;

	handleCheckbox = (event: Event) => {
		if (event.target instanceof HTMLInputElement) {
			const isChecked = event.target.checked;

			if (isChecked) {
				this.agreement = true;
			} else {
				this.agreement = false;
			}
		}
	};

	showMultipleCountries = false;
	countriesOfOrganization: any = [];
	chosenMultipleCountries = "Countries of Operation";
	showCountries = false;
	countryOfHeadquarter: any = "Country of Headquarter";
	countries: any = [];
	indicesList: any = [];

	constructor(
		private formBuilder: FormBuilder,
		private appService: AppService,
		private titleService: Title,
		private countryService: CountryService
	) {
		this.titleService.setTitle(this.title);
	}

	ngOnInit(): void {
		this.fetchData();
	}

	async fetchData() {
		this.countryService
			.getAllCountries()
			.then((countries: any[]) => {
				this.countries = countries.sort((a, b) =>
					a.name.common.localeCompare(b.name.common)
				);
			})
			.catch((error) => {
				console.error("Error fetching countries:", error);
			});

		this.fetchMemberships();
		this.fetching = false;
	}

	async fetchMemberships() {
		this.appService.getAllSocialMedias().subscribe((res: SocialMedia[]) => {
			this.memberships = res;
		});
	}

	form = this.formBuilder.group({
		address: ["", { validators: [Validators.required], updateOn: "change" }],
		email: [
			"",
			{
				validators: [Validators.required, Validators.maxLength(100)],
				updateOn: "change",
			},
		],
		contactNumber: [
			"",
			{ validators: [Validators.required], updateOn: "change" },
		],
		contactPerson: [
			"",
			{ validators: [Validators.required], updateOn: "change" },
		],
		nameOfOrganization: [
			"",
			{ validators: [Validators.required], updateOn: "change" },
		],
		cityOfHeadquarter: [
			"",
			{ validators: [Validators.required], updateOn: "change" },
		],
		primaryContactPerson: [
			"",
			{ validators: [Validators.required], updateOn: "change" },
		],
		primaryContactPersonEmail: [
			"",
			{ validators: [Validators.required], updateOn: "change" },
		],
		primaryContactPersonPhone: [
			"",
			{ validators: [Validators.required], updateOn: "change" },
		],
	});

	async onCreate() {
		if (this.form.invalid || !this.agreement) {
			this.isSubmitting = false;
			return;
		} else {
			this.isSubmitting = true;
			let nameOfOrganization = this.form.value.nameOfOrganization;
			let countriesOfOrganization = this.countriesOfOrganization;
			let cityOfHeadquarter = this.form.value.cityOfHeadquarter;
			let countryOfHeadquarter = this.countryOfHeadquarter;
			let primaryContactPerson = this.form.value.primaryContactPerson;
			let primaryContactPersonEmail = this.form.value.primaryContactPersonEmail;
			let primaryContactPersonPhone = this.form.value.primaryContactPersonPhone;
			let address = this.form.value.address;
			let email = this.form.value.email;
			let contactNumber = this.form.value.contactNumber;
			let contactPerson = this.form.value.contactPerson;
			let category = this.chosenCategory;
			let industry = this.chosenIndustry;
			let organizationType = this.chosenOrganization;
			let areaOfInterest = this.chosenAreaOfInterest;
			let exclusiveContent = this.chosenExclusiveContent;
			let privateDiscussionPlatform = this.chosenPrivateDiscussionPlatforms;
			let heardFrom = this.chosenMedium;
			let id = this.memberships.length + 1;
			let sId = id.toString();

			// this.form.disable;

			let payload = {
				nameOfOrganization: nameOfOrganization,
				countriesOfOrganization: countriesOfOrganization,
				cityOfHeadquarter: cityOfHeadquarter,
				countryOfHeadquarter: countryOfHeadquarter,
				primaryContactPerson: primaryContactPerson,
				primaryContactPersonEmail: primaryContactPersonEmail,
				primaryContactPersonPhone: primaryContactPersonPhone,
				address: address,
				contactNumber: contactNumber,
				contactPerson: contactPerson,
				category: category,
				industry: industry,
				organizationType: organizationType,
				areaOfInterest: areaOfInterest,
				heardFrom: heardFrom,
				exclusiveContent: exclusiveContent,
				privateDiscussionPlatform: privateDiscussionPlatform,
				email: email,
				id: id,
			};

			// console.log(payload);

			await this.appService.membership(sId, payload);

			this.msgg =
				"You registration form has been submitted and you may now proceed to payment using the provided payment information.";

			this.form.reset();
			this.isSubmitting = false;

			// email notification service
			try {
				const res = await axios.post(
					"https://iif-mailserver.cyclic.cloud",
					payload
				);

				return res;
			} catch (error) {
				console.log(error);
				return Promise.reject(error);
			}
		}
	}

	setChosenCategory(item: any) {
		this.chosenCategory = item;
		this.showCategory = false;
	}

	setChosenIndustry(item: any) {
		this.chosenIndustry = item;
		this.showIndustry = false;
	}

	setChosenOrganization(item: any) {
		this.chosenOrganization = item;
		this.showOrganization = false;
	}

	setChosenAreaOfInterest(item: any) {
		this.chosenAreaOfInterest = item;
		this.showAreaOfInterest = false;
	}

	setExclusiveContent(item: any) {
		this.chosenExclusiveContent = item;
		this.showExclusiveContent = false;
	}

	setPrivateDiscussionPlatforms(item: any) {
		this.chosenPrivateDiscussionPlatforms = item;
		this.showPrivateDiscussionPlatforms = false;
	}

	setMedium(item: any) {
		this.chosenMedium = item;
		this.showMedium = false;
	}

	setChosenCountries(item: any, index: any) {
		this.countriesOfOrganization.push(item);

		this.indicesList.push(index);

		let c = "";
		this.countriesOfOrganization.forEach((element: any) => {
			c = c + element + ", ";
		});

		this.chosenMultipleCountries = c;
	}

	isIndexInList(index: number): boolean {
		return this.indicesList.includes(index);
	}

	setCountry(item: any) {
		this.countryOfHeadquarter = item;
		this.showCountries = false;
	}
}
