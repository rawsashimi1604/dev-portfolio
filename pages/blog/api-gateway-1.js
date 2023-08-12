import React from "react";

import blogs from "data/blogs";
import ApiGatewayOne from "@/components/blogs/ApiGatewayOne";
import Head from "next/head";

function apiGatewayOne() {
  return (
    <div>
      <Head>
        <title>API Gateway Pattern - Gavin Loo</title>
      </Head>
      <ApiGatewayOne data={blogs["api-gateway-1"]} />
    </div>
  );
}

export default apiGatewayOne;
