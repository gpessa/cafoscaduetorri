import { styled, Typography } from '@mui/material';
import Address from '../Address';
import Columns from '../Columns';
import Map from '../Map';
import { organization } from 'contasts';
import { BREAKPOINT } from 'theme';

const SectionMap = styled(Map)(({ theme }) => ({
  [theme.breakpoints.up(BREAKPOINT)]: {
    position: 'absolute',
    right: '50%',
    left: 0,
    top: 0,
  },
}));

const Contacts = () => (
  <Columns
    id="contacts"
    left={
      <SectionMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4146.002660811926!2d11.3461168!3d44.493685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bef6c0af5d%3A0x3b2e8b12277e4b48!2sCa%20&#39;
      %20Due%20Torri!5e1!3m2!1sen!2snl!4v1664144478739!5m2!1sen!2snl"
      />
    }
    right={
      <>
        <Typography variant="h2" paragraph>
          Contatti
        </Typography>
        <Address
          {...organization.contactPoint}
          {...organization.location}
          mobile={organization.telephone}
          name={organization.name}
        />
      </>
    }
  />
);

export default Contacts;
