"use client";
import Footer from "@/components/Home/footer";
import Navbar from "@/components/Home/navbar";
import ProductCatalogue from "@/components/products/catalogue";
import DeploymentPartnershipCTA from "@/components/products/DeploymentPartnership";
import ProductHero from "@/components/products/heroSection";
import ImpactEvidence from "@/components/products/ImpactEvidence";
import ProductPhilosophy from "@/components/products/philosophy";
import ProductDeepDive from "@/components/products/products";

export default function Products() {
  return (
    <div>
        <Navbar/>
        <ProductHero/>
        <ProductPhilosophy/>
        <ProductCatalogue/>
        <ProductDeepDive/>
        <ImpactEvidence/>
        <DeploymentPartnershipCTA/>
        <Footer/>
    </div>
  );
}
