import React from 'react';

const feedbacks = [
    {
        client: 'Catalyst Partners',
        feedback: 'Adepthr Partners provided exceptional service and valuable insights that helped us grow our business.',
        name: 'John Doe, CEO',
    },
    {
        client: 'Triam Solutions',
        feedback: 'Professional, responsive, and highly knowledgeable team. Highly recommended!',
        name: 'Jane Smith, Director',
    },
    {
        client: 'ABC Ltd.',
        feedback: 'Their expertise and dedication made a significant difference in our project’s success.',
        name: 'Michael Lee, Project Manager',
    },
];

const ClientsFeedback = () => (
    <section style={{ background: '#e6f2fb', padding: '40px 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: 32 }}>Client Feedback</h2>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                {feedbacks.map(({ client, feedback, name }, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: '#fff',
                            borderRadius: 12,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                            padding: 24,
                            flex: '1 1 280px',
                            minWidth: 280,
                            maxWidth: 320,
                            textAlign: 'left',
                        }}
                    >
                        <h3 style={{ margin: '0 0 12px 0', color: '#1976d2' }}>{client}</h3>
                        <p style={{ fontStyle: 'italic', marginBottom: 16 }}>{feedback}</p>
                        <div style={{ fontWeight: 500, color: '#555' }}>{name}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ClientsFeedback;