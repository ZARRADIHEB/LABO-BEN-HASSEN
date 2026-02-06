# MongoDB Appointment System Setup

## Overview

The appointment booking system now uses MongoDB to store appointments and check availability in real-time.

## Features

✅ Real-time availability checking
✅ Prevents double-booking of time slots
✅ Shows booked times as unavailable
✅ Persistent appointment storage
✅ Cursor pointer on all interactive elements

## MongoDB Setup

### Option 1: Local MongoDB (Recommended for Development)

1. **Install MongoDB:**

   - Download and install MongoDB from https://www.mongodb.com/try/download/community
   - Or use Docker: `docker run -d -p 27017:27017 --name mongodb mongo`

2. **Configure Environment:**

   - The `.env.local` file is already created with: `MONGODB_URI=mongodb://localhost:27017/medilab`

3. **Start MongoDB:**
   - If installed locally: `mongod`
   - If using Docker: MongoDB container should be running

### Option 2: MongoDB Atlas (Cloud - Recommended for Production)

1. **Create a Free Account:**

   - Go to https://www.mongodb.com/cloud/atlas
   - Create a free cluster

2. **Get Connection String:**

   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

3. **Update .env.local:**
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/medilab?retryWrites=true&w=majority
   ```
   Replace `<username>` and `<password>` with your credentials

## API Endpoints

### Check Availability

**POST** `/api/appointments/availability`

Request:

```json
{
  "location": "Downtown Medical Center - 123 Main St",
  "date": "2026-02-10"
}
```

Response:

```json
{
  "bookedTimes": ["09:00 AM", "02:00 PM"]
}
```

### Book Appointment

**POST** `/api/appointments`

Request:

```json
{
  "service": "Complete Blood Count (CBC)",
  "location": "Downtown Medical Center - 123 Main St",
  "date": "2026-02-10",
  "time": "10:00 AM",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "dob": "1990-01-01"
}
```

Response (Success):

```json
{
  "success": true,
  "message": "Appointment booked successfully!",
  "appointmentId": "507f1f77bcf86cd799439011"
}
```

Response (Already Booked):

```json
{
  "error": "This time slot is already booked. Please select another time."
}
```

### Get All Appointments (Admin)

**GET** `/api/appointments`

Response:

```json
{
  "appointments": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "service": "Complete Blood Count (CBC)",
      "location": "Downtown Medical Center - 123 Main St",
      "date": "2026-02-10",
      "time": "10:00 AM",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "status": "confirmed",
      "createdAt": "2026-02-03T10:00:00.000Z"
    }
  ]
}
```

## Database Schema

### Appointment Model

```javascript
{
  service: String (required),
  location: String (required),
  date: String (required),
  time: String (required),
  firstName: String (required),
  lastName: String (required),
  email: String (required),
  phone: String (required),
  dob: String (required),
  status: String (enum: ['pending', 'confirmed', 'cancelled'], default: 'pending'),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

**Indexes:**

- Compound index on: `location`, `date`, `time` (for fast availability checks)

## How It Works

1. **User selects location and date:**

   - System fetches all booked time slots for that location/date

2. **Time slots are displayed:**

   - Booked slots are shown as disabled with "Booked" label
   - Available slots are clickable

3. **User submits booking:**
   - System checks again if slot is available (prevents race conditions)
   - If available: Creates appointment and returns success
   - If booked: Returns error asking user to select another time

## UI Enhancements

### Cursor Styles

- ✅ Buttons: `cursor-pointer`
- ✅ Select dropdowns: `cursor-pointer`
- ✅ Input fields: `cursor-text`
- ✅ Disabled elements: `cursor-not-allowed`
- ✅ Radio labels: `cursor-pointer`
- ✅ Time slot buttons: `cursor-pointer` (available), `cursor-not-allowed` (booked)

## Testing

### Test Locally

1. Ensure MongoDB is running
2. Start the development server: `npm run dev`
3. Navigate to http://localhost:3000/book
4. Try booking an appointment
5. Try booking the same slot again - should show error

### View Database

Using MongoDB Compass or mongo shell:

```bash
mongo
use medilab
db.appointments.find().pretty()
```

## Troubleshooting

**Error: "Failed to connect to MongoDB"**

- Check if MongoDB is running
- Verify MONGODB_URI in .env.local
- For Atlas: Check network access and credentials

**Error: "This time slot is already booked"**

- This is expected behavior when slot is taken
- Select a different time slot

**Time slots not loading**

- Check browser console for errors
- Verify API routes are accessible
- Check MongoDB connection

## Next Steps

Future enhancements you can add:

- Email confirmation upon booking
- SMS notifications
- Admin dashboard to manage appointments
- Appointment cancellation feature
- Reschedule functionality
- Calendar view of appointments
