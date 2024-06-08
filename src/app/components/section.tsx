import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

class Section extends React.Component<SectionProps> {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Section;