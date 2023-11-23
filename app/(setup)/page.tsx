import { initalProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitalModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initalProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitalModal />;
};

export default SetupPage;
