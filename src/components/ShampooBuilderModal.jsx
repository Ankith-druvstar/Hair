import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  LinearProgress,
} from "@mui/material";

const steps = [
  {
    title: "Hair Type",
    key: "hair",
    options: ["Straight", "Wavy", "Curly", "Coily"],
  },
  {
    title: "Scalp Type",
    key: "scalp",
    options: ["Dry", "Oily", "Normal", "Sensitive"],
  },
  {
    title: "Fragrance",
    key: "fragrance",
    options: ["Rose", "Lavender", "Jasmine", "Aloe Vera"],
  },
  {
    title: "Concern",
    key: "concern",
    options: ["Hair Fall", "Dandruff", "Frizz", "Dryness"],
  },
];

export default function ShampooBuilderModal({ open, onClose, setFinalBlend }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const isComplete =
    !!data.hair && !!data.scalp && !!data.fragrance && !!data.concern;

  const handleSelect = (value) => {
    const updated = { ...data, [steps[step].key]: value };
    setData(updated);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      const finalData = { ...updated };

      // const formula = `${finalData.hair} ${finalData.concern} ${finalData.fragrance} Shampoo`;

      setFinalBlend(finalData);
    }
  };

  useEffect(() => {
    if (open) {
      setStep(0);
      setData({});
    }
  }, [open]);

  const progress = ((step + 1) / steps.length) * 100;

  const formula = `${
    data.hair || ""
  } ${data.concern || ""} ${data.fragrance || ""} Shampoo`.trim();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        className: isComplete ? "builder-complete" : "builder-glass",
      }}
    >
      <DialogContent>
        {/* 🔥 SHOW ONLY FINAL SCREEN */}
        {isComplete ? (
          <div className="final-screen">
            <h2>✨ Your Personalized Shampoo</h2>
            <p className="final-formula">{formula}</p>
          </div>
        ) : (
          <>
            {/* Progress */}
            <LinearProgress variant="determinate" value={progress} />

            {/* STEP TITLE */}
            <Typography className="builder-title">
              {steps[step].title}
            </Typography>

            {/* OPTIONS */}
            <div className="builder-options">
              {steps[step].options.map((opt) => (
                <div
                  key={opt}
                  className="builder-card"
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </div>
              ))}
            </div>

            {/* PREVIEW */}
            <div className="builder-preview">
              <div className="bottle">🧴</div>
              <p>{formula.trim() ? formula : "Start customizing..."}</p>
            </div>
          </>
        )}
      </DialogContent>
      {isComplete && (
        <div className="floating-bottle">
          🧴
          <span className="tooltip">{formula}</span>
        </div>
      )}
    </Dialog>
  );
}
