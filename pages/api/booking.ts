import prisma from "@helpers/prisma";

export default async function handle(req, res) {
  const { name, email, _notes, _date, _attendee, _duration } = req.body;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const result = await prisma.booking.create({
    data: {
      schedule_date: _date.toString(),
      attendee_id: parseInt(_attendee),
      duration: parseInt(_duration),
      additional_notes: _notes,
      owner_name: name,
      owner_email: email,
    },
  });
  res.json(result);
}
