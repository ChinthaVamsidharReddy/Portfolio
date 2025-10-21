import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationBadge = ({ certification }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'text-accent border-accent/30 bg-accent/10';
      case 'in-progress': return 'text-warning border-warning/30 bg-warning/10';
      case 'expired': return 'text-muted-foreground border-border bg-muted/20';
      default: return 'text-primary border-primary/30 bg-primary/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified': return 'CheckCircle';
      case 'in-progress': return 'Clock';
      case 'expired': return 'AlertCircle';
      default: return 'Award';
    }
  };

  return (
    <div
      className="relative w-full sm:w-80 md:w-96 h-64 sm:h-72 md:h-80 cursor-pointer perspective-1000 mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="h-full p-4 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                <Icon name={certification.icon} size={24} className="text-background" />
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(certification.status)}`}>
                <div className="flex items-center space-x-1">
                  <Icon name={getStatusIcon(certification.status)} size={12} />
                  <span className="capitalize">{certification.status}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-poppins font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                {certification.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-1 sm:mb-2">{certification.issuer}</p>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {certification.description}
              </p>
            </div>

            {/* Footer */}
            <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Issued:</span>
                <span className="text-foreground font-medium">{certification.issueDate}</span>
              </div>
              {certification.expiryDate && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expires:</span>
                  <span className="text-foreground font-medium">{certification.expiryDate}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Credential ID:</span>
                <span className="text-foreground font-medium font-jetbrains text-xs">
                  {certification.credentialId}
                </span>
              </div>
            </div>

            {/* Flip Indicator */}
            <div className="absolute bottom-2 right-2 text-muted-foreground group-hover:text-primary transition-colors">
              <Icon name="RotateCcw" size={16} />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="h-full p-4 sm:p-6 bg-card border border-primary/30 rounded-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="font-poppins font-semibold text-primary text-sm sm:text-base">Verification Details</h3>
              <Icon name="Shield" size={20} className="text-primary" />
            </div>

            {/* Skills Covered */}
            <div className="mb-3 sm:mb-4">
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1">Skills Covered:</h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {certification.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Links */}
            <div className="space-y-2 flex-1">
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1">Verification:</h4>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ExternalLink"
                iconPosition="right"
                className="justify-between text-primary border-primary/20 hover:bg-primary/10"
              >
                View Certificate
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="Link"
                iconPosition="right"
                className="justify-between text-secondary border-secondary/20 hover:bg-secondary/10"
              >
                Verify Credential
              </Button>
            </div>

            {/* Score/Grade */}
            {certification.score && (
              <div className="border-t border-border pt-2 sm:pt-4">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-muted-foreground">Score:</span>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="text-base sm:text-lg font-bold text-accent">{certification.score}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">/ {certification.maxScore}</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-muted rounded-full mt-1 sm:mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000"
                    style={{ width: `${(certification.score / certification.maxScore) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Flip Back Indicator */}
            <div className="absolute bottom-2 right-2 text-primary">
              <Icon name="RotateCw" size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadge;
