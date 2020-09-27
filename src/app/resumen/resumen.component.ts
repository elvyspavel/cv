import { Component, OnInit } from '@angular/core';
import { ElvysRodService } from '../services/elvys-rod.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: ElvysRodService) { }

  ngOnInit(): void {
  }

}
