import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KnowledgeCenter = ({ components }) => {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
          <Icon name="Code2" size={20} className="text-background" />
        </div>
        <div>
          <h2 className="text-2xl font-poppins font-bold text-foreground">
            Knowledge Center
          </h2>
          <p className="text-muted-foreground">
            Reusable components and code snippets for developers
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {components.map((component) => (
          <div
            key={component.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-effect"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name={component.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-bold text-foreground">
                      {component.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {component.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded">
                    {component.framework}
                  </span>
                  <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded">
                    v{component.version}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                {component.description}
              </p>

              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Implementation
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Copy"
                    onClick={() => copyToClipboard(component.code)}
                    className="h-6 px-2"
                  >
                    Copy
                  </Button>
                </div>
                <pre className="text-sm text-muted-foreground overflow-x-auto">
                  <code>{component.code}</code>
                </pre>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Download" size={14} />
                    <span>{component.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} />
                    <span>{component.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="GitFork" size={14} />
                    <span>{component.forks}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="border-primary/20 text-primary hover:bg-primary/10"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                    className="bg-accent hover:bg-accent/90"
                  >
                    Get Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          variant="outline"
          size="lg"
          iconName="Plus"
          iconPosition="left"
          className="border-secondary/20 text-secondary hover:bg-secondary/10"
        >
          Browse All Components
        </Button>
      </div>
    </section>
  );
};

export default KnowledgeCenter;