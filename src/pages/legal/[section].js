// import React from "react";
// import { useRouter } from "next/router";
// import Meta from "components/Meta";
// import LegalSection from "components/LegalSection";

// function LegalPage(props) {
//   const router = useRouter();

//   return (
//     <>
//       <Meta title="Legal" />
//       <LegalSection
//         bgColor="default"
//         size="normal"
//         bgImage=""
//         bgImageOpacity={1}
//         section={router.query.section}
//         key={router.query.section}
//       />
//     </>
//   );
// }

// // Tell Next.js to export static files for each page
// // See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// export const getStaticPaths = () => ({
//   paths: [
//     { params: { section: "terms-of-service" } },
//     { params: { section: "privacy-policy" } },
//   ],
//   fallback: true,
// });

// export function getStaticProps({ params }) {
//   return { props: {} };
// }

// export default LegalPage;



import React from "react";
import { useRouter } from "next/router";
import Meta from "components/Meta";
import LegalSection from "components/LegalSection";

function LegalPage(props) {
  const router = useRouter();

  // Handle fallback behavior
  if (router.isFallback) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <>
      <Meta title="Legal" />
      <LegalSection
        bgColor="default"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        section={router.query.section}
        key={router.query.section}
      />
    </>
  );
}

// Static paths for `terms-of-service` and `privacy-policy` sections
export const getStaticPaths = () => ({
  paths: [
    { params: { section: "terms-of-service" } },
    // { params: { section: "privacy-policy" } },
  ],
  fallback: true, // Can be 'false' if you want to avoid fallback behavior
});

// Fetch static props (even if you don't have specific data to fetch)
export function getStaticProps({ params }) {
  const { section } = params;

  // Fetch any necessary data related to the section, if applicable
  // This is a placeholder, you might want to fetch actual content for each section
  return {
    props: {
      section, // Pass section as a prop
    },
  };
}

export default LegalPage;