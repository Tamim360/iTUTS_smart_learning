import React from "react";

const Blogs = () => {
  return (
    <div className="grid place-items-center">
      <h2 className="text-2xl font-bold my-6 border-b">Latest Blogs</h2>
      <div className="collapse max-w-sm shadow-md m-2 border">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is CORS (cross-origin resource sharing)?
        </div>
        <div className="collapse-content">
          <p>
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain. It extends and adds flexibility to the same-origin policy
            (SOP). However, it also provides potential for cross-domain attacks,
            if a website's CORS policy is poorly configured and implemented.
            CORS is not a protection against cross-origin attacks such as
            cross-site request forgery (CSRF).
          </p>
        </div>
      </div>
      <div className="collapse max-w-sm shadow-md m-2 border">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication
        </div>
        <div className="collapse-content">
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
        </div>
      </div>
      <div className="collapse max-w-sm shadow-md m-2 border">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in)
          </p>
        </div>
      </div>
      <div className="collapse max-w-sm shadow-md m-4 border">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
