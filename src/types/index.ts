export interface GiftType {
  giftId: string;
  name: string;
  active: boolean;
}

export interface GiftDateType {
  giftDateId: string;
  date: string;
  gifts: GiftType[];
}

export interface PersonType {
  personId: string;
  name: string;
  giftDates: GiftDateType[];
}
