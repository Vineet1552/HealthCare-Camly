import React, { useEffect } from "react";
import {
  DownloadApp,
  PatientReview,
  PopularTherapies,
} from "../../features/home";
import { TopBanner } from "../../layouts/topBanner/topBanner";
import { Layout } from "../../layouts";
import { useLazyTestApiQuery } from "../../services/auth";
import { showError } from "../../constants";

export default function Home() {
  const [getTest] = useLazyTestApiQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // const testing = async () => {
  //   console.log("hittt");
  //   try {
  //     const response = await getTest({}).unwrap();
  //     if (response?.statusCode === 200) {
  //       console.log(response);
  //       // setAllRating(response?.data?.rating || []);
  //       // setTotalCount(response?.data?.count);
  //     }
  //   } catch (error: any) {
  //     showError(error?.data?.message || "");
  //   }
  // };

  // useEffect(() => {
  //   testing();
  // }, []);

  return (
    <>
      <Layout>
        <main className="content home_page">
          <TopBanner />
          <PopularTherapies />
          <PatientReview />
          <DownloadApp />
        </main>
      </Layout>
    </>
  );
}
