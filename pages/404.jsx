import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);
  return (
    <div className="not-found">
      <h1>Ooooops....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go Back to the{" "}
        <Link legacyBehavior href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
