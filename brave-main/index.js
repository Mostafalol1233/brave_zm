// ملف مساعد لاستضافة Vercel
// يستخدم هذا الملف فقط في بيئة الإنتاج لتوجيه الطلبات إلى ملف index.html

const express = require('express');
const path = require('path');
const app = express();

// خدمة الملفات الثابتة من مجلد dist
app.use(express.static(path.join(__dirname, 'dist')));

// توجيه كل الطلبات إلى index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// تحديد المنفذ من البيئة أو استخدام 3000 كقيمة افتراضية
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// تصدير التطبيق للاستخدام مع Vercel
module.exports = app;