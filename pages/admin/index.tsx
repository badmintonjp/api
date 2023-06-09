import AccessDenied from "@/components/access-denied";
import Layout from "@/components/layout";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Admin() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();
  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (loading) return null;
  return (
    <Layout>
      {!session ? (
        <AccessDenied />
      ) : (
        <>
          <h1>Admin Page</h1>
          <p>
            <strong>{content || "\u00a0"}</strong>
          </p>
        </>
      )}
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps<{
  session: Session | null;
}> = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};
