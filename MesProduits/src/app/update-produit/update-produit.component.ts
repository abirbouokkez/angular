import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { produit } from '../model/produit.model';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [ ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new produit();
  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params.id
    );
    console.log(this.currentProduit);
  }
}