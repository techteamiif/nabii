import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pillar",
  templateUrl: "./pillar.component.html",
  styleUrls: ["./pillar.component.scss"],
})
export class PillarComponent implements OnInit {
  bgImage = 'url("../../../assets/images/bg4.png';
  title: string = "Strategic Pillar";

  fetching: boolean = false;
  url: any;
  id: any;
  sTitle: any;
  pillar: any;

  pillars = [
    {
      id: 1,
      spTitle: "Increasing the demand for impact capital",
      spSubtitle: "through capacity building programmes",
      spTitle2: "Demand Working Group",
      spContent:
        "<p>The aim of this pillar is to increase the demand for impact capital for investments in investment ready MSMEs and Social Organizations(SOs) in Nigeria through capacity building programmes. Their importance in employment generation, economic empowerment, and poverty alleviation has long been recognized. The IIF 2019 landscape study highlighted some impending factors including lack of access to suitable capital, especially early- stage financing in local currencies, challenging macroeconomic environment, stringent loan conditions, high cost of transaction and reluctance of entrepreneurs to reduce their controlling equities. The study also revealed that most MSMEs in Nigeria were not investment ready thereby reducing the overall investment opportunity in Nigeria. For Social Organizations, especially service delivery NGOs, the major challenges include limited awareness/capacity for resource mobilization from the impact market and lack of a result/outcome-based culture in social service procurements in Nigeria.</p><p>Capacity building support is designed to strengthen organizations so that they can deliver more effective services and greater impact. To increase the demand for impact capital there are two types of capacity building: impact readiness and investment readiness, many organizations have a need for both types of support.</p>",
      spImage:
        "https://mly7rtrxtytf.i.optimole.com/oOvf39Y-ailzoZtd/w:2000/h:1335/q:mauto/https://nigerianabii.org/wp-content/uploads/2021/04/pexels-christina-morillo-1181435-1-scaled.jpg",
      spWorkingGroups: [
        {
          firstName: "Adeshina",
          lastName: "Emmanuel",
          org: "Nigerian Investment Promotion Commission",
        },
        {
          firstName: "Ayodeji",
          lastName: "Balogun",
          org: "Afex Nigeria (TEAM LEAD)",
        },
        { firstName: "Chiamaka", lastName: "Ndukwu", org: "AGROHIVE" },
        {
          firstName: "Habiba",
          lastName: "Ali",
          org: "Sosai Renewable Company",
        },
        { firstName: "Ibukunoluwa", lastName: "Atanda", org: "Farm Bank" },
        { firstName: "Michael", lastName: "Ogundare", org: "Crop2Cash" },
        {
          firstName: "Ndidi",
          lastName: "Nnoli (DR)",
          org: "Growing Business Foundation",
        },
        {
          firstName: "Oladayo",
          lastName: "Olaide",
          org: "MacArthur Foundation",
        },
        {
          firstName: "Oluwakorede",
          lastName: "Moshood",
          org: "Comestibles AG Food Tech Limited",
        },
        {
          firstName: "Rufus",
          lastName: "Idris",
          org: "USAID Feed the Future Nigeria Agribusiness Investment Activity",
        },
        { firstName: "Rukaiya", lastName: "el-Rufia", org: "Pwc" },
        { firstName: "Uche", lastName: "Aniche", org: "#StartupSouth" },
      ],
    },
    {
      id: 2,
      spTitle: "Increasing and deepening the supply of impact capital",
      spSubtitle: "Increasing The Supply Of Impact Capital​",
      spTitle2: "Supply Working Group",
      spContent:
        "<p>The supply of impact capital working group identified the priority challenges as follows: poor availability of early-stage funding, scarcity of local currency denominated funds that support early-stage enterprises, and lack of incentives to supply-side players to finance impact initiatives. Based on this, it recommended increasing and deepening the supply of impact capital for investments in MSMEs and social organizations.</p><p>The impact investing landscape in Nigeria is dominated by Development Finance Institutions (DFIs) who are responsible for deploying 85% of impact capital in the country, leaving non-DFIs to provide the remaining capital.[1]  DFIs by their nature spur economic development in emerging economies by investing in the private sector to promote job creation and sustainable economic growth</p>",
      spImage: "",
      spWorkingGroups: [
        { firstName: "Amarakoon", lastName: "Bandara", org: "UNDP" },
        { firstName: "Andrew", lastName: "Smith", org: "GIZ NICOP" },
        { firstName: "Ayoboni", lastName: "Akindolie", org: "Argentil" },
        {
          firstName: "Bonaventue",
          lastName: "Okhaimo",
          org: "Development Bank Of Nigeria PLC	",
        },
        { firstName: "Collins", lastName: "Onuegbu", org: "Signal Alliance" },
        { firstName: "Deji", lastName: "Adebusoye", org: "Sahel Capital" },
        { firstName: "Fatima", lastName: "Umar", org: "UNDP" },
        { firstName: "Gbemi", lastName: "Akande", org: "Pacer Ventures" },
        {
          firstName: "Kashetolulope",
          lastName: "Lawal",
          org: "Sterling Bank Plc	",
        },
        { firstName: "Meghan", lastName: "Curran", org: "Acumen" },
        {
          firstName: "Oguche",
          lastName: "Agudah",
          org: "Pension Fund Operators, (TEAM LEAD)",
        },
        { firstName: "Omolola", lastName: "Fashesin", org: "Stanbic IBTC" },
        { firstName: "Uche", lastName: "Aniche", org: "#StartupSouth" },
        { firstName: "Yemi", lastName: "Keri", org: "Rising Tide Africa" },
      ],
    },
    {
      id: 3,
      spTitle: "Promoting impact investing regulatory and policy framework",
      spSubtitle:
        "Developing The Enabling Policy Framework For Impact Investing​",
      spTitle2: "Policy Working Group",
      spContent:
        "<p>The policy working group identified three priority challenges as follows: lack of government incentives that reward impact investments in Nigeria – beyond just the size of financial investments, lack of legal framework for impact investing, and lack of incentives to supply-side players to finance impact initiatives. The group recommended that promoting an impact investing regulatory and policy framework in government and public offices as a solution to address the above limitations.</p><p>The G8 Social Impact Investment Taskforce noted that policy development is a central pillar of the impact investment market.  Hence, the role of government in the development of the market as defined in practical terms by the G8 Social Impact Investment Taskforce are that of a market builder, market steward and market participant. As a market builder, the role of the government is to provide leadership which confers legitimacy on impact investing and increases the confidence of market actors in participating and contributing to the early infrastructure that encourages the de-risking and development of the market.</p>",
      spImage:
        "https://mly7rtrxtytf.i.optimole.com/oOvf39Y-ailzoZtd/w:2000/h:1335/q:mauto/https://nigerianabii.org/wp-content/uploads/2021/04/pexels-christina-morillo-1181435-1-scaled.jpg",
      spWorkingGroups: [
        { firstName: "Chime", lastName: "Asonye", org: "" },
        {
          firstName: "Dabesaki",
          lastName: "Mac-Ikemenjima",
          org: "Ford Foundation",
        },
        {
          firstName: "Fehintola",
          lastName: "Odulaja",
          org: "Ogun State Investment Promotion and Facilitation Agency",
        },
        {
          firstName: "Henrietta",
          lastName: "Onwuegbuzie",
          org: "Lagos Business School, Pan-Atlantic University",
        },
        { firstName: "Laoye", lastName: "Jaiyeola", org: "NESG (TEAM LEAD)" },
        {
          firstName: "Natalie",
          lastName: "Beinisch",
          org: "Circular Economy Innovation Partnership",
        },
        {
          firstName: "Olu",
          lastName: "Ogunfowora",
          org: "Ideanest Investments",
        },
        { firstName: "Sam", lastName: "Hart", org: "ABIA STATE GOVERNMENT" },
        {
          firstName: "Samuel",
          lastName: "Omenka",
          org: "Budget Office of the Federation",
        },
        {
          firstName: "Samuel",
          lastName: "Ekuweme",
          org: "Fed. Ministry of Finance Budget & National Planning",
        },
        { firstName: "Stanley", lastName: "Zebulon", org: "NEXTIER ADVISORY" },
        {
          firstName: "Umma",
          lastName: "Aboki",
          org: "Kaduna Investment Promotion Agency",
        },
        {
          firstName: "Yewande",
          lastName: "Sadiku",
          org: "Nigerian Investment Promotion Commission",
        },
      ],
    },
    {
      id: 4,
      spTitle: "Promoting the number & effectiveness of intermediaries",
      spSubtitle: "to facilitate access to impact capital",
      spTitle2: "Intermediary Working Group",
      spContent:
        "<p>The intermediation of impact capital working group identified the priority challenges of weak intermediation actors that cannot efficiently support the market’s needs, and a lack of understanding/limited knowledge of the Impact Investing ecosystem, especially in the Nigerian context. Based on this it recommended promoting effective intermediaries to facilitate access to capital.</p><p>Intermediaries include financial and non-financial actors such as banks, crowdfunding, financial advisors, venture capitalist/private equity fund managers, business development service providers (BDSPs), educational institutions, accelerators, incubators, business hubs, consultants, and technical assistant facilities to support the growth of the impact investing market and create linkages between investors and investee companies to facilitate investments.</p>",
      spImage:
        "https://mly7rtrxtytf.i.optimole.com/oOvf39Y-ailzoZtd/w:2000/h:1335/q:mauto/https://nigerianabii.org/wp-content/uploads/2021/04/pexels-christina-morillo-1181435-1-scaled.jpg",
      spWorkingGroups: [
        {
          firstName: "Bamidele",
          lastName: "Seun Owoola",
          org: "Welcome2Africa International",
        },
        { firstName: "Charles", lastName: "Anyanwu", org: "LSETF" },
        {
          firstName: "Chukwuma",
          lastName: "Kalu",
          org: "Royal Exchange General Insurance Company",
        },
        {
          firstName: "Henrietta",
          lastName: "Onwuegbuzie",
          org: "Lagos Business School, Pan-Atlantic University",
        },
        {
          firstName: "Odunoluwa",
          lastName: "Longe",
          org: "Hague Institute for the Innovation of Law",
        },
        {
          firstName: "Olu",
          lastName: "Ogunfowora",
          org: "Ideanest Investments",
        },
        {
          firstName: "Oluwatoyin",
          lastName: "Adegbite-Moore",
          org: "African Venture Philanthropy Alliance",
        },
        { firstName: "Oluwole", lastName: "Odetayo", org: "Wennovation Hub" },
        {
          firstName: "Uloma",
          lastName: "Ike",
          org: "Bank of Industry (TEAM LEAD)",
        },
      ],
    },
  ];

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let parm = params.get("id");
      var chars = parm!.split("-reqSlug-");
      this.id = chars[0];
    });
    this.pillar = this.pillars[this.id - 1];
  }
}
