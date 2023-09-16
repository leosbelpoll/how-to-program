import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../components/layout";
// import * as gtag from "../utils/gtag";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
    //   gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <div class="container p-5">
        <input
          class="form-control form-control-lg mb-4"
          type="text"
          placeholder="Qué desea buscar?"
          aria-label=".form-control-lg example"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
