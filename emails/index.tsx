import {
  Heading,
  Tailwind,
  Head,
  Preview,
  Body,
  Text,
  Html,
  Container,
  Font,
  Hr,
  Img,
  Link,
  Section,
  TextProps,
} from '@react-email/components'

const fontUrl = 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2'
const redirectLink = 'https://www.youtube.com/watch?v=rwfXsZ_5tHQ'
const sectionPadding = 'px-16'
const instagramLogo =
  'https://static.vecteezy.com/system/resources/previews/018/930/691/original/instagram-logo-instagram-icon-transparent-free-png.png'
const deviceImageUrl = 'https://ltdfoto.ru/images/2023/06/17/download.png'
const metaLogo =
  'https://branditechture.agency/wp-content/uploads/2021/11/Instagram-Meta-Gradient-Logo-SVG-1.svg'

export default function Email() {
  // not trying to make copy of inst email, just example for practice and try smth new

  const CenterOpacityText = (props: TextProps) => (
    <Text {...props} className={`text-center opacity-70 ${props.className}`} />
  )

  return (
    <Tailwind>
      <Html lang="en">
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: fontUrl,
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Security warning</Preview>
        <Body className="text-slate-700 bg-slate-50">
          <Container className="p-8">
            <Heading as="h3" className="mt-0 flex justify-center text-slate-500 items-center">
              <Img alt="Instagram" src={instagramLogo} height={40} width={40} />
              Instagram
            </Heading>

            <Hr />

            <Heading as="h1" className={'text-center'}>
              Your account is at risk
            </Heading>

            <Section className={`${sectionPadding}`}>
              <Text className={`text-center mb-1 text-xl`}>We noticed a new entry, $Name</Text>
              <CenterOpacityText className="mt-0">
                We&apos;ve noticed signing in from a device you don&apos;t normally use.
              </CenterOpacityText>
              <Img src={deviceImageUrl} alt="Device" className={'mx-auto my-0'} />
              <Text className="text-center mb-0">Linux · Firefox · California, USA</Text>
              <CenterOpacityText className="mt-0">May 10 at 1:25 AM (PDT)</CenterOpacityText>
            </Section>

            <Hr />

            <Section className={`${sectionPadding}`}>
              <CenterOpacityText>
                If it was you, some of your account settings and security haven&apos;t changed for a
                few days, but you can open them to an account that you previously signed in with.
              </CenterOpacityText>
              <CenterOpacityText>
                If it wasn&apos;t you,{' '}
                <Link target="_blank" href={redirectLink}>
                  you can secure your account
                </Link>{' '}
                on the device you previously signed in with.{' '}
                <Link target="_blank" href={redirectLink}>
                  More
                </Link>
              </CenterOpacityText>
            </Section>

            <Section className={`${sectionPadding}`}>
              <CenterOpacityText className="mb-0">from</CenterOpacityText>
              <Img src={metaLogo} alt="Meta" height={24} width="auto" className="mx-auto my-0" />
              <CenterOpacityText className="mb-1 mt-2 text-xs">
                © Instagram. Meta Platforms, Inc., 1601 Willow Road, Menlo Park, CA 94025
              </CenterOpacityText>
              <CenterOpacityText className="mt-0 text-xs">
                The message was sent to $Email. Not yours account?{' '}
                <Link target="_blank" href={redirectLink}>
                  Remove email from it.
                </Link>
              </CenterOpacityText>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}
