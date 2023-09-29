import { Dialog } from "./components/Dialog";
import { performRequest } from "./lib/datoCms";

const PAGE_CONTENT_QUERY = `
  query Home {
    allDialogfields {
      name
      content
      options {
        copy
        nextStep {
          name
        }
      }
      }
    }
      `;

export default async function Home() {
  const {
    data: { allDialogfields },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <main className="flex min-h-screen flex-col p-24">
      <Dialog allDialogfields={allDialogfields} />
    </main>
  );
}
