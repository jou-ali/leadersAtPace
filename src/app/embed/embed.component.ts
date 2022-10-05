import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-embed',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.css']
})
export class EmbedComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
