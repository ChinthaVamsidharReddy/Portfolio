import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodePlayground = ({ playground }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/20">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
            <Icon name={playground.icon} size={20} className="text-background" />
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-foreground">{playground.title}</h3>
            <p className="text-sm text-muted-foreground">{playground.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            className="text-primary hover:text-primary/80"
          >
            Live Demo
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
      </div>

      {/* Code Tabs */}
      <div className="flex border-b border-border bg-muted/10">
        {playground.examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === index
                ? 'text-primary border-b-2 border-primary bg-background' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            {example.name}
          </button>
        ))}
      </div>

      {/* Code Content */}
      <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-48'} overflow-hidden`}>
        <div className="p-4">
          <div className="bg-background rounded-lg border border-border overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b border-border bg-muted/20">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <span className="text-sm text-muted-foreground font-jetbrains">
                  {playground.examples[activeTab].filename}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                iconName="Copy"
                className="text-muted-foreground hover:text-foreground"
              >
                Copy
              </Button>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-jetbrains text-foreground">
                <code>{playground.examples[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Output Preview */}
      {playground.examples[activeTab].output && (
        <div className="border-t border-border p-4 bg-muted/5">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Play" size={16} className="text-accent" />
            <span className="text-sm font-medium text-foreground">Output:</span>
          </div>
          <div className="bg-background border border-border rounded-lg p-3">
            <div className="text-sm font-jetbrains text-accent">
              {playground.examples[activeTab].output}
            </div>
          </div>
        </div>
      )}

      {/* Key Concepts */}
      <div className="border-t border-border p-4 bg-muted/5">
        <h4 className="text-sm font-semibold text-foreground mb-2">Key Concepts:</h4>
        <div className="flex flex-wrap gap-2">
          {playground.concepts.map((concept, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-md border border-secondary/20"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;