# GenCare System

### Pages I Need

- Homepage for The Company and How To buy a place for a new Hospital.
- Identical Page for Person
- add a User (Any Type)
- Data Page (Search)
- Doctors of Hospital
- Statistics and Last Events (HomePage for Admins & Super Admins & Accountants)
- Lets Add SomePatients ( Homepage for data Entry & Reception Guy)

### Type of Users

- Patient
- Doctor
- Data Entry
- Admin
- Super Admin
- Accountant

### Type of Places

- OutClinics
- Emergency
- ICU
- Surgical Department
- PICU
- NICU
- InPatient Rooms
- Cath Lab Department

## Database Structure

- Hospitals
  - Name
  - Logo
  - Contract {Duration, Price}
  - Address
  - Id
- Staff
  - Name
  - Position
  - Rule
  - Id
  - Salary
  - Image
  - Gallary
  - Last Events
  - Password
  - Email
  - Username
  - Phone Number
- Patients
  - Id
  - Name
  - Birth Date
  - Address
  - Email
  - Phone Number
  - National Id
  - Nationality
  - Created At
  - Receptionists [{StaffId, TimeOfSaving}, ...]
- OutClinics
  - ClinicName
  - StaffId
  - Price of Booking
  - Patients [{PatientId, TimeOfBooking, Payments}]
- Departments
  - Name
  - Id
  - Services [ServiceId]
  - Staff [StaffId]
- Services
  - Service Name
  - Price
  - PatientId
  - Specialized Place (Department | Clinic | ....)
  - PlaceId
- Events
  - Status (Enter | Go out)
- Rooms
  - Room Contents
  - Price Of Day
  - Number Of Room
  -
- Admins
- Super Admins
- High Level Staff
- Consumables
- Stock
