import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  // console.log(router);
  const { params } = router.query;

  console.log(params);
  return <h1>Doc</h1>;
}

export default Doc;
