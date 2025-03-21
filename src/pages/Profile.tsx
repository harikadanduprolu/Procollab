import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Harika Danduprolu",
    email: "harika.d@example.com",
    bio: "👩‍💻 Tech enthusiast, problem solver, and founder of Minfrost.",
    location: "Hyderabad, India",
    website: "https://minfrost.com",
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Toggle Edit Mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Save Profile (Dummy Function)
  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully! 🎉");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-12 gap-8 animate-fade-in">
      {/* Sidebar - Profile Info */}
      <div className="col-span-4 bg-[#121212] rounded-3xl shadow-xl p-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar
            alt={profile.name}
            src="https://source.unsplash.com/150x150/?woman,tech"
            sx={{ width: 150, height: 150 }}
          />
          {isEditing ? (
            <TextField
              label="Name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              variant="outlined"
              className="bg-[#1E1E24] text-white rounded-lg"
            />
          ) : (
            <Typography variant="h5" className="font-bold text-[#D85CF5]">
              {profile.name}
            </Typography>
          )}
          <Typography variant="body2" className="text-[#B0BEC5]">
            {isEditing ? (
              <TextField
                label="Bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                variant="outlined"
                className="bg-[#1E1E24] text-white rounded-lg"
              />
            ) : (
              profile.bio
            )}
          </Typography>
          <Typography variant="body2" className="text-[#B0BEC5] flex items-center">
            <LockIcon className="text-sm mr-2" />
            {profile.email}
          </Typography>
          <Typography variant="body2" className="text-[#B0BEC5]">
            📍 {profile.location}
          </Typography>
          <Typography
            variant="body2"
            className="text-[#3FBBFE] cursor-pointer"
            onClick={() => window.open(profile.website, "_blank")}
          >
            🌐 {profile.website}
          </Typography>
        </div>

        {/* Edit/Save Button */}
        <div className="flex justify-center">
          <IconButton
            onClick={isEditing ? handleSave : handleEditToggle}
            className="bg-[#3FBBFE] text-white hover:bg-[#D85CF5] transition-all rounded-full"
          >
            {isEditing ? <SaveIcon /> : <EditIcon />}
          </IconButton>
        </div>

        {/* Logout Button */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => (window.location.href = "/login")}
          className="text-[#F50057] border-[#F50057] hover:bg-[#F50057] hover:text-white transition-all"
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </div>

      {/* Main Content - Overview */}
      <div className="col-span-8 space-y-8">
        {/* GitHub-like Overview Section */}
        <Card className="rounded-2xl shadow-lg bg-[#1E1E24]">
          <CardContent className="space-y-4">
            <Typography variant="h6" className="text-[#FFFFFF] font-semibold">
              Overview
            </Typography>
            <Typography variant="body1" className="text-[#B0BEC5]">
              🚀 Lead Developer at <strong>Minfrost</strong>, specializing in building scalable platforms and empowering small businesses with tech solutions.
            </Typography>
          </CardContent>
        </Card>

        {/* Repositories Section */}
        <Card className="rounded-2xl shadow-lg bg-[#1E1E24]">
          <CardContent className="space-y-4">
            <Typography variant="h6" className="text-[#FFFFFF] font-semibold">
              Repositories
            </Typography>
            <List className="space-y-4">
              <ListItem className="bg-[#292A2D] rounded-lg px-4 py-3">
                <CodeIcon className="text-[#3FBBFE] mr-3" />
                <ListItemText
                  primary="🌐 Workit Platform Redesign"
                  secondary="React, Tailwind, Node.js"
                />
                <StarIcon className="text-[#F4B400] ml-auto" />
              </ListItem>
              <ListItem className="bg-[#292A2D] rounded-lg px-4 py-3">
                <CodeIcon className="text-[#3FBBFE] mr-3" />
                <ListItemText
                  primary="📚 Smackle E-commerce Platform"
                  secondary="Next.js, TypeScript, MongoDB"
                />
                <StarIcon className="text-[#F4B400] ml-auto" />
              </ListItem>
              <ListItem className="bg-[#292A2D] rounded-lg px-4 py-3">
                <CodeIcon className="text-[#3FBBFE] mr-3" />
                <ListItemText
                  primary="🔥 BioBlock Smart Contracts"
                  secondary="Solidity, Blockchain"
                />
                <StarIcon className="text-[#F4B400] ml-auto" />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Contribution Activity */}
        <Card className="rounded-2xl shadow-lg bg-[#1E1E24]">
          <CardContent className="space-y-4">
            <Typography variant="h6" className="text-[#FFFFFF] font-semibold">
              Recent Activity
            </Typography>
            <Typography variant="body1" className="text-[#B0BEC5]">
              ⭐️ Joined <strong>AI for Good Hackathon</strong>
            </Typography>
            <Typography variant="body1" className="text-[#B0BEC5]">
              🎉 Created a new project: <strong>BioBlock Tracker</strong>
            </Typography>
            <Typography variant="body1" className="text-[#B0BEC5]">
              💡 Contributed to <strong>Minfrost's Social Innovation Idea</strong>
            </Typography>
          </CardContent>
        </Card>

        {/* Work/Contribution Badges */}
        <Card className="rounded-2xl shadow-lg bg-[#1E1E24]">
          <CardContent className="space-y-4">
            <Typography variant="h6" className="text-[#FFFFFF] font-semibold">
              Badges & Achievements
            </Typography>
            <div className="flex space-x-4">
              <span className="bg-[#292A2D] px-4 py-2 rounded-lg text-[#F4B400]">
                🏆 Hackathon Champion
              </span>
              <span className="bg-[#292A2D] px-4 py-2 rounded-lg text-[#3FBBFE]">
                👩‍💻 Open Source Contributor
              </span>
              <span className="bg-[#292A2D] px-4 py-2 rounded-lg text-[#D85CF5]">
                🔥 500+ GitHub Commits
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
