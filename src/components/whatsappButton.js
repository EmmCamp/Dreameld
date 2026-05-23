import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Si usas react-icons

export default function WhatsAppButton() {
    // Pon tu número real aquí (Código de país + número, sin espacios ni el "+")
    const phoneNumber = "521234567890"; 
    const message = encodeURIComponent("¡Hola, Dreameld! Me interesa obtener más información sobre sus servicios. 🚀");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Contáctanos por WhatsApp"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50px',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                zIndex: 9999,
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <FaWhatsapp />
        </a>
    );
}