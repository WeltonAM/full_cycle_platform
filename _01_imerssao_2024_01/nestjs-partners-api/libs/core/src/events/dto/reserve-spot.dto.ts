import { TicketKind } from '@prisma/client';

export class ReserveSpotDto {
  spot: string[];
  ticket_kind: TicketKind;
  email: string;
}
