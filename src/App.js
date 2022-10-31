
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Show from "./Show";

import background from "./assests/bg.png"; 

const data= [
  {
      "question": "How to Get Started?",
      "answer": "Just let us know your email id and we will let you know top 100 websites that are coming for Free!"
  },
  {
      "question": "What’s Next Step?",
      "answer": "Continuously, you will get high authority websites on your email and you can choose as per your need."
  },
  {
      "question": "Will I get a refund if the link got removed by webmaster after some time?",
      "answer": "First of all, we will try to reinstate the link. In case, we fail with that – we will provide a replacement or issue a refund.\nAs we are working with the trusted webmasters/admin, you don’t need to worry about that. We will be in full control on this."
  },
  {
      "question": "Do you provide refunds upon cancellation of an order?",
      "answer": "In case webmaster denied to publish the article – we will let you know the reasons and based on mutual discussion, we are fine providing refunds too.\nAfter delivering of the order, there is no such refunds."
  },
  {
      "question": "Will You Provide Content or I have to Provide Content?",
      "answer": "You can provide us an article and if you want our content writing services, we do charge $30 for around 800 words."
  },
  {
      "question": "My Question is still not there, what Can I do to Get The Answers?",
      "answer": "You can get the answers of all your questions on mail: support@outreachkart.com"
  }
]

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">-</div>
      <div className="collapsIconWrapper">+</div>
    </Box>
  );
};

const Doubt = () => {
  

  const [open, setOpen] = useState("");

  function handleAccordClick(data) {
    if (open === data) setOpen("");
    if (open !== data) setOpen(data);
  }
  return (
    <div style={{ backgroundImage: `url(${background})`, padding:"2rem 0 2rem 0", }}>
      <div >
        <Typography align="center" variant="h5" style={{color:"white", paddingBottom:"2rem"}} >MUI Dynamic Accordion</Typography>
      </div>

      <div className="doubt_accordion">
        {data &&
          data?.map((doubt, data) => (
            <Accordion
              elevation={0}
              sx={{
                padding: "1rem 0 0 0",
              }}
              expanded={data === open}
              onClick={() => handleAccordClick(data)}
              
            >
              <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#F3F3F3",
                  paddingRight: "6.3rem",
                }}
              >
                <Typography
                  sx={{
                    paddingRight: "6.3rem",
                  }}
                >
                  {doubt.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography align="left">{doubt.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
<Show/>
    </div>
  );
};

export default Doubt;
