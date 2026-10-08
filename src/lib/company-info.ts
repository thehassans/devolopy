/**
 * Official Company Registration & Legal Licensing Information
 * Eastern WorkForce Solutions Establishment (مؤسسة إيسترن ووركفورس سلوشنز)
 * Licensed in the Kingdom of Saudi Arabia
 */

export interface CommercialRegisterInfo {
  establishmentNameEn: string;
  establishmentNameAr: string;
  brandName: string;
  associatedBrands: string[];
  crNumber: string; // National Number / CR: 7043399216
  nationalUnifiedNumber: string;
  vatNumber: string; // 312781371600003
  tinNumber: string; // 3127813716
  entityTypeEn: string; // Establishment
  entityTypeAr: string; // مؤسسة
  statusEn: string; // Active
  statusAr: string; // ساري
  ownershipEn: string;
  ownershipAr: string;
  shortAddress: string; // EDMA8328
  buildingStreetEn: string; // 8328 · Street 18 · Sec. 3844
  buildingStreetAr: string; // 8328 · شارع 18 · 3844
  districtCityEn: string; // Madinat Al Ummal Dist., Dammam 32253
  districtCityAr: string; // حي مدينة العمال، الدمام 32253
  countryEn: string; // Kingdom of Saudi Arabia
  countryAr: string; // المملكة العربية السعودية
  fullAddressEn: string;
  fullAddressAr: string;
  email: string;
}

export const COMPANY_REGISTRATION: CommercialRegisterInfo = {
  establishmentNameEn: "Eastern WorkForce Solutions Establishment",
  establishmentNameAr: "مؤسسة إيسترن ووركفورس سلوشنز",
  brandName: "Devolopy",
  associatedBrands: ["Devolopy", "Maqder ERP"],
  crNumber: "7043399216",
  nationalUnifiedNumber: "7043399216",
  vatNumber: "312781371600003",
  tinNumber: "3127813716",
  entityTypeEn: "Establishment",
  entityTypeAr: "مؤسسة",
  statusEn: "Active",
  statusAr: "ساري",
  ownershipEn:
    "Devolopy is a specialized technology branch of Eastern WorkForce Solutions Establishment, licensed in Saudi Arabia. Maqder ERP is owned and operated by Eastern WorkForce Solutions Establishment, a commercially registered establishment in Dammam.",
  ownershipAr:
    "ديفولوبي هي ذراع التكنولوجيا والحلول البرمجية التابعة لمؤسسة إيسترن ووركفورس سلوشنز المرخصة في المملكة العربية السعودية. كما تملك وتدير مؤسسة إيسترن ووركفورس سلوشنز نظام مقدر (Maqder ERP)، وهي منشأة مسجلة تجارياً في الدمام.",
  shortAddress: "EDMA8328",
  buildingStreetEn: "8328 · Street 18 · Sec. 3844",
  buildingStreetAr: "8328 · شارع 18 · 3844",
  districtCityEn: "Madinat Al Ummal Dist., Dammam 32253",
  districtCityAr: "حي مدينة العمال، الدمام 32253",
  countryEn: "Kingdom of Saudi Arabia",
  countryAr: "المملكة العربية السعودية",
  fullAddressEn:
    "8328 Street 18, Sec. 3844, Madinat Al Ummal Dist., Dammam 32253, Kingdom of Saudi Arabia",
  fullAddressAr:
    "8328 · شارع 18 · 3844، حي مدينة العمال، الدمام 32253، المملكة العربية السعودية",
  email: "contact@devolopy.com",
};
