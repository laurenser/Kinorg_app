// --- 1. Gestion du Compte à Rebours ---

// Définissez la date de lancement (par exemple, dans 7 jours à 10h00)
// Format : "Mois Jour, Année Heure:Minute:Seconde"
const launchDate = new Date("December 08, 2025 18:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
const timer = setInterval(function() {

    // Obtenir la date et l'heure actuelles
    const now = new Date().getTime();

    // Trouver la distance entre maintenant et la date de lancement
    const distance = launchDate - now;

    // Calculs de temps pour les jours, heures, minutes et secondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Fonction pour ajouter un zéro devant les nombres à un chiffre
    const pad = (num) => String(num).padStart(2, '0');

    // Afficher le résultat dans les éléments
    document.getElementById("days").innerHTML = pad(days);
    document.getElementById("hours").innerHTML = pad(hours);
    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);

    // Si le compte à rebours est terminé
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "🎉 Le site est lancé ! Bienvenue !";
        // Vous pouvez cacher le formulaire ici si vous voulez
        document.getElementById("subscribe-form").style.display = 'none';
    }
}, 1000);

// --- 2. Gestion du Formulaire d'Abonnement ---

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const emailInput = document.getElementById('email-input');
    const messageDisplay = document.getElementById('message');
    const email = emailInput.value;

    // Simulation de l'envoi des données (en réalité, vous enverriez ceci à un serveur)
    console.log(`Email à abonner : ${email}`);

    // Afficher un message de succès (ou d'erreur) à l'utilisateur
    messageDisplay.textContent = `Merci ! L'email ${email} a été enregistré pour la notification de lancement.`;
    emailInput.value = ''; // Effacer le champ après l'envoi
    
    // Rendre le message invisible après quelques secondes
    setTimeout(() => {
        messageDisplay.textContent = '';
    }, 5000); 
});