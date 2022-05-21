import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

type AboutProps = {
  user: any;
};

const About: NextPage<AboutProps> = ({ ...props }) => {
  if (props?.user) {
    return <h1>{props.user.name}</h1>;
  }
  return <h1>No Page</h1>;
};

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: { user: '' },
    };
  }
  const { user } = session;
  return {
    props: { user },
  };
}

export default About;
