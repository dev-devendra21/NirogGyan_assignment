interface AvailabilityDTO {
  timing: string;
  day: string;
  status: boolean;
}

export interface DoctorDTO {
  _id: string;
  name: string;
  email: string;
  specialization: string;
  experience: number;
  fee: number;
  phone: string;
  image: string;
  availability: AvailabilityDTO;
  address: string;
  about: string;
  education: string;
}
