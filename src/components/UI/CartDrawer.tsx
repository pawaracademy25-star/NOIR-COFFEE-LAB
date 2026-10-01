import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, isAudioEnabled } = useStore();
  const [isCheckoutSubmitted, setIsCheckoutSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (isAudioEnabled) soundFx.playClick();
    setIsCheckoutSubmitted(true);
  };

  const handleClose = () => {
    setIsCheckoutSubmitted(false);
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 60,
          display: 'flex',
          justifyContent: 'flex-end',
          pointerEvents: 'auto',
        }}
        onClick={handleClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            width: '400px',
            maxWidth: '100vw',
            height: '100%',
            background: '#1C1A18',
            borderLeft: '1px solid #292521',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#E9E3D8',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #292521', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShoppingBag size={20} color="#B35D38" />
                <h3 className="serif" style={{ fontSize: '1.4rem', fontWeight: 500 }}>
                  Your Bag
                </h3>
              </div>
              <button onClick={handleClose} style={{ color: '#A39B92', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            {/* Content / Items */}
            {isCheckoutSubmitted ? (
              <div style={{ padding: '2rem 0', textAlign: 'center' }}>
                <CheckCircle size={48} color="#B35D38" style={{ marginBottom: '1rem' }} />
                <h3 className="serif" style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Demo Checkout</h3>
                <p style={{ fontSize: '0.85rem', color: '#A39B92', lineHeight: '1.6', marginBottom: '2rem' }}>
                  This is a demonstration project. No payment gateway is attached and no actual transaction occurred.
                </p>
                <button
                  onClick={() => {
                    clearCart();
                    handleClose();
                  }}
                  style={{
                    padding: '0.8rem 1.5rem',
                    background: '#E9E3D8',
                    color: '#11100F',
                    border: 'none',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Done
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div style={{ padding: '3rem 0', textAlign: 'center', color: '#A39B92' }}>
                <p style={{ fontSize: '0.95rem' }}>Your shopping bag is empty.</p>
                <span style={{ fontSize: '0.8rem', display: 'block', marginTop: '0.5rem' }}>
                  Explore our beans or menu to add items.
                </span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxHeight: '60vh', overflowY: 'auto' }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: '#11100F',
                      border: '1px solid #292521',
                      padding: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <h4 className="serif" style={{ fontSize: '1.05rem', fontWeight: 500 }}>
                        {item.name}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: '#B35D38', marginTop: '0.2rem' }}>
                        ₹{item.price}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #332D28', background: '#1C1A18' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{ padding: '0.3rem 0.5rem', color: '#E9E3D8', cursor: 'pointer' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.8rem', padding: '0 0.4rem' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ padding: '0.3rem 0.5rem', color: '#E9E3D8', cursor: 'pointer' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ color: '#A39B92', cursor: 'pointer', padding: '0.2rem' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal */}
          {!isCheckoutSubmitted && cart.length > 0 && (
            <div style={{ borderTop: '1px solid #292521', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', marginBottom: '1.2rem' }}>
                <span style={{ color: '#A39B92' }}>Subtotal</span>
                <span style={{ fontWeight: 600 }}>₹{subtotal}</span>
              </div>

              <button
                onClick={handleCheckout}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: '#E9E3D8',
                  color: '#11100F',
                  border: 'none',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
