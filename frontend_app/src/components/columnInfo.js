// This file contains the column info for the sidebar. If you want to update the columns, edit the backend_api/api/column_info.json and copy here.
export const COLUMN_INFO = [
  {"name": "EIN", "description": "Employer Identification Number (EIN) assigned by IRS - XXXXXXXXX"},
  {"name": "NAME", "description": "Primary name of organization"},
  {"name": "ICO", "description": "In care of name (person to direct correspondence to)"},
  {"name": "STREET", "description": "Street address"},
  {"name": "CITY", "description": "City of the organization"},
  {"name": "STATE", "description": "Two-letter state abbreviation"},
  {"name": "ZIP", "description": "Zip code (May include ZIP+4 format like '04416-0000')"},
  {"name": "GROUP", "description": "Group Exemption Number (GEN)"},
  {"name": "SUBSECTION", "description": "IRS subsection code under 501(c)"},
  {"name": "AFFILIATION", "description": "Affiliation code describing the organizational grouping"},
  {"name": "CLASSIFICATION", "description": "Classification code(s) for further breakdown of the subsection"},
  {"name": "RULING", "description": "Date when exemption was granted (YYYYMM)"},
  {"name": "DEDUCTIBILITY", "description": "Code describing whether donations are tax deductible"},
  {"name": "FOUNDATION", "description": "Foundation type code"},
  {"name": "ACTIVITY", "description": "Activity codes (obsolete but still present in older orgs)"},
  {"name": "ORGANIZATION", "description": "Type of organization"},
  {"name": "STATUS", "description": "Exempt organization status code"},
  {"name": "TAX_PERIOD", "description": "Most recent tax filing period (YYYYMM)"},
  {"name": "ASSET_CD", "description": "Asset bucket code"},
  {"name": "INCOME_CD", "description": "Income bucket code (see ASSET_CD for ranges)"},
  {"name": "FILING_REQ_CD", "description": "Filing requirement code"},
  {"name": "PF_FILING_REQ_CD", "description": "Private foundation filing requirement"},
  {"name": "ACCT_PD", "description": "Accounting period month (MM)"},
  {"name": "ASSET_AMT", "description": "Dollar amount of assets"},
  {"name": "INCOME_AMT", "description": "Dollar amount of income"},
  {"name": "REVENUE_AMT", "description": "Form 990 revenue amount"},
  {"name": "NTEE_CD", "description": "National Taxonomy of Exempt Entities code"},
  {"name": "SORT_NAME", "description": "Secondary sort name or alternate/trade name"}
];
