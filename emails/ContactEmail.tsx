import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

export interface ContactEmailProps {
  date: string;
  email: string;
  message: string;
  name: string;
  type: string;
}

const ContactEmail = (values: ContactEmailProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>New Contact Form Submission!</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi Kerri,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You have a new contact form submission!
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {values.name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {values.email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Date: </b>
                  {values.date}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Event Type: </b>
                  {values.type}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                  {values.message}
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}></Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}></Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2023 | Moments by Kerri Coy, Ashtabula, OH 44048, U.S.A |
            www.momentsbykerricoy.com
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default ContactEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily: "montserrat",
};

const paragraph = {
  fontSize: 16,
};

// const logo = {
//   padding: "30px 20px",
// };

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "10px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
