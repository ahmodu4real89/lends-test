import mongoose from "mongoose";

const PersonalInformationSchema = new mongoose.Schema({
  profile: String,
  organization: String,
  datejoined: String,
  status: String,
  full_name: String,
  phone_number: String,
  email: String,
  bvn: String,
  gender: String,
  marital_status: String,
  children: String,
  type_of_residence: String
});

const EducationAndEmploymentSchema = new mongoose.Schema({
  level_of_education: String,
  employment_status: String,
  sector_of_employment: String,
  duration_of_employment: String,
  office_email: String,
  monthly_income: String,
  loan_repayment: String
});

const SocialsSchema = new mongoose.Schema({
  twitter: String,
  facebook: String,
  instagram: String
});

const GuarantorSchema = new mongoose.Schema({
  "fullname": String,
  "phone_number": String,
  "email": String,
  relationship: String
});

const UserDetailsSchema = new mongoose.Schema({
  personalInformation: PersonalInformationSchema,
  educationAndEmployment: EducationAndEmploymentSchema,
  socials: SocialsSchema,
  guarantors: [GuarantorSchema]
});


const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);

export default UserDetails




