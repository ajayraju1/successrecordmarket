import React, { useState } from "react";
import "./index.css";

const leadTypes = [
  {
    name: "Probate",
    img: "/images/probate.jpg",
    description:
      "Properties inherited after the death of an owner and are going through legal processes. Often sold quickly by heirs who don't want to manage the property.",
  },
  {
    name: "Pre-Probate",
    img: "/images/pre-probate.jpg",
    description:
      "These are properties owned by someone recently deceased but not yet officially in probate. A strategic opportunity for early outreach to families.",
  },
  {
    name: "Divorce",
    img: "/images/divorce.png",
    description:
      "Properties where the owners are divorcing and may need to sell the home fast to divide assets. Usually motivated sellers.",
  },
  {
    name: "Motivated Sellers",
    img: "/images/motivated-sellers.png",
    description:
      "Homeowners who are eager to sell fast due to financial issues, personal situations, or relocation. Often willing to accept lower offers.",
  },
  {
    name: "Distressed Properties",
    img: "/images/distressed-properties.png",
    description:
      "Homes that are in poor condition or have been neglected. Ideal for investors looking for rehab opportunities at discounted prices.",
  },
  {
    name: "Distressed Owners",
    img: "/images/distressed-homeowners.png",
    description:
      "Homeowners facing hardship (like foreclosure, illness, or debt) who are motivated to sell their property quickly to avoid further losses.",
  },
  {
    name: "Tax Delinquents",
    img: "/images/tax-delinquents.jpeg",
    description:
      "Owners who are behind on property tax payments. Their properties may be subject to tax liens or auction if unresolved.",
  },
  {
    name: "Tax Liens",
    img: "/images/tex-lien.png",
    description:
      "Liens placed by the government due to unpaid property taxes. These properties may be sold or seized, creating investment opportunities.",
  },
  {
    name: "Liens",
    img: "/images/lien.png",
    description:
      "A broad category including tax liens, mechanic's liens, or judgment liens. These properties can have legal or financial issues but may sell for less.",
  },
  {
    name: "Inheritance",
    img: "/images/inheritance.png",
    description:
      "Homes passed on to heirs who may not want to keep them. These properties are often vacant and may need quick cash offers.",
  },
  {
    name: "Cash Buyers",
    img: "/images/cash-buyers.png",
    description:
      "Investors or individuals ready to buy properties with cash. They can close fast and are ideal buyers for motivated or distressed sellers.",
  },
  {
    name: "Aged Homes with Aged Owners",
    img: "/images/aged-owners.png",
    description:
      "Older properties owned by seniors who may be downsizing, moving to care facilities, or managing estates. Often sold in as-is condition.",
  },
  {
    name: "Mortgage",
    img: "/images/mortage.png",
    description:
      "Homeowners with high or delinquent mortgage payments. These sellers may be at risk of foreclosure and are open to options.",
  },
  {
    name: "Vacant Properties",
    img: "/images/vacant-properties.png",
    description:
      "Homes that are unoccupied and often not maintained. These are prime targets for investors looking for fix-and-flip or rental opportunities.",
  },
  {
    name: "Absentee Landlords",
    img: "/images/absente-landlords.png",
    description:
      "Owners who do not live at the property and may be tired of managing tenants. Often willing to sell rental properties below market value.",
  },
  {
    name: "Skip Tracing",
    img: "/images/skip-tracing.png",
    description:
      "The process of locating property owners who are hard to contact, often used when mailing returns undelivered or phone numbers are outdated.",
  },
];

const LeadTypesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="products-container">
      <h1 className="products-heading">Lead Types</h1>
      <div className="products-grid">
        {leadTypes.map((type, idx) => (
          <div
            className="product-card"
            key={type.name}
            onClick={() => handleToggle(idx)}
            style={{ cursor: "pointer" }}
          >
            <div className="product-icon-container">
              <img src={type.img} alt={type.name} className="product-icon" />
            </div>
            <h2 className="product-name">{type.name}</h2>
            {openIndex === idx && (
              <p className="product-description">{type.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadTypesPage;
