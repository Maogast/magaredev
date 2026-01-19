import React from "react";
import { 
  Container, 
  Typography, 
  Box 
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { 
  Groups, 
  School, 
  VolunteerActivism, 
  Business,
  HistoryEdu,
  MedicalServices
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";

const leadershipRoles = [
  {
    icon: <Groups />,
    title: "Departmental Head - Revival & Reformation",
    organization: "Zimmerman SDA Church",
    period: "2026 - 2027",
    description: "Appointed by the Holy Spirit to lead the Revival and Reformation department, focusing on spiritual renewal, discipleship programs, and implementing church-wide transformation initiatives."
  },
  {
    icon: <VolunteerActivism />,
    title: "Prayer Ministry Leader",
    organization: "Kasarani Prayer Cell",
    period: "2024 - Present",
    description: "Leading weekly intercessory prayer sessions and spiritual warfare initiatives, fostering a culture of sustained prayer and community spiritual support."
  },
  {
    icon: <School />,
    title: "Ambassadors Club Teacher",
    organization: "Youth Development Ministry",
    period: "2026 - Present",
    description: "Educating and mentoring young ambassadors in Christian leadership, public speaking, and community service, preparing them for effective ministry and societal impact."
  },
  {
    icon: <MedicalServices />,
    title: "Co-Manager, Medical Missionary Operations",
    organization: "Nature's Kitchen Medical Missionary",
    period: "2024 - Present",
    description: "Co-leading medical missionary initiatives that integrate holistic health education, community wellness programs, and sustainable health practices."
  },
  {
    icon: <Business />,
    title: "Lead Developer & Technical Director",
    organization: "Mine the Word Academy",
    period: "2024 - Present",
    description: "Leading technology initiatives for an online Bible school training Christian missionaries across Kenya through digital theological education and leadership development."
  },
  {
    icon: <HistoryEdu />,
    title: "Morning Devotion Facilitator",
    organization: "Audience Chamber Prayer Group",
    period: "2024 - Present",
    description: "Facilitating daily morning devotion sessions (5:00 AM - 6:00 AM) via Google Meet, creating consistent spiritual discipline and community connection."
  }
];

export default function Leadership() {
  return (
    <Container id="leadership" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Community Leadership & Ministry
      </Typography>
      
      <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
        Integrating technical expertise with spiritual leadership to drive transformation 
        in communities, churches, and organizations through strategic ministry and servant leadership.
      </Typography>

      <List sx={{ width: '100%' }}>
        {leadershipRoles.map((role, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start" sx={{ py: 2 }}>
              <ListItemIcon sx={{ minWidth: 40, mr: 2 }}>
                {role.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                    {role.title}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                      sx={{ display: 'block', mb: 1 }}
                    >
                      {role.organization} • {role.period}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {role.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < leadershipRoles.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ 
        mt: 6, 
        p: 3, 
        bgcolor: 'background.default', 
        borderRadius: 2,
        borderLeft: '4px solid',
        borderColor: 'primary.main'
      }}>
        <Typography variant="h6" gutterBottom>
          Leadership Philosophy
        </Typography>
        <Typography variant="body1">
          &ldquo;I believe in servant leadership that empowers others through mentorship, 
          strategic vision that transforms communities, and faithful stewardship 
          that leverages both spiritual gifts and professional skills.&rdquo;
        </Typography>
      </Box>
    </Container>
  );
}