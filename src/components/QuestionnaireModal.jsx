import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import SpaIcon from "@mui/icons-material/Spa";
import WavesIcon from "@mui/icons-material/Waves";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const questions = [
  {
    question: "What is your hair type?",
    options: [
      { label: "Straight", icon: <SpaIcon /> },
      { label: "Wavy", icon: <WavesIcon /> },
      { label: "Curly", icon: <AutoAwesomeIcon /> },
    ],
  },
  {
    question: "How often do you wash your hair?",
    options: [
      { label: "Daily", icon: <SpaIcon /> },
      { label: "2-3 times/week", icon: <WavesIcon /> },
      { label: "Once a week", icon: <AutoAwesomeIcon /> },
    ],
  },
  {
    question: "Do you use hair products?",
    options: [
      { label: "Yes", icon: <SpaIcon /> },
      { label: "No", icon: <AutoAwesomeIcon /> },
    ],
  },
];

export default function QuestionnaireModal({ open, handleClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleCloseAll = () => {
    setStep(0);
    setAnswers({});
    handleClose();
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Answers:", answers);

      navigate("/home");
    }
  };

  const selectOption = (value) => {
    if (answers[step]) return;

    const updated = { ...answers, [step]: value };
    setAnswers(updated);

    // immediate next (no timeout)
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Answers:", updated);
      handleClose(); // close modal
      navigate("/home");
    }
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="xs"
      PaperProps={{ className: "glass-modal" }}
      onClose={handleCloseAll}
    >
      <DialogContent>
        {/* Progress */}
        <LinearProgress
          variant="determinate"
          value={progress}
          className="progress"
        />

        <Typography className="step">
          Step {step + 1} / {questions.length}
        </Typography>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h6" className="question">
              {questions[step].question}
            </Typography>

            <div className="card-options">
              {questions[step].options.map((opt, index) => (
                <div
                  key={index}
                  className={`card ${
                    answers[step] === opt.label ? "active" : ""
                  }`}
                  onClick={() => selectOption(opt.label)}
                >
                  <span>{opt.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {false && (
          <div className="actions">
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!answers[step]}
            >
              {step === questions.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
