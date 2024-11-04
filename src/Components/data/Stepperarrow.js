// const steps = [
//   "Employee details",
//   "Educational details",
//   "Professional details",
//   "Personal details",
// ];

// const StepperArrows = () => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       mt={4}
//       mb={2}
//       sx={{
//         backgroundColor: "#004d66",
//         overflow: "hidden",
//       }}
//     >
//       {steps.map((step, index) => (
//         <Box
//           key={step}
//           display="flex"
//           alignItems="center"
//           px={2}
//           py={1}
//           sx={{
//             position: "relative",
//             backgroundColor: "#004d66",
//             color: "white",
//             "&:not(:last-child)::after": {
//               content: '""',
//               position: "absolute",
//               right: "-10px",
//               top: 0,
//               borderTop: "22px solid transparent",
//               borderBottom: "22px solid transparent",
//               borderLeft: "10px solid #004d66",
//             },
//           }}
//         >
//           <Typography variant="body1">{step}</Typography>
//         </Box>
//       ))}
//     </Box>
//   );
// };
