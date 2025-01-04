import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "src/app/interfaces/app";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  bgImage = 'url("../../../assets/images/bg4.png';
  title: string = "News";

  fetching: boolean = false;
  selectedData: Blog = {};
  data: Blog[] = [];

  url: any;
  id: any;
  sTitle: any;
  blog: Blog = {};

  constructor(
    private appService: AppService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) {
    this.titleService.setTitle(this.title);

    this.activatedRoute.paramMap.subscribe((params) => {
      var q = params.get("id");
      var splitter = q?.split("-nid-", 3);

      this.id = splitter![1];
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.fetchBlog();
    this.fetching = false;
  }

  async fetchBlog() {
    this.appService.getBlog(this.id).subscribe((res: Blog) => {
      this.blog = res;
    });
  }
}
